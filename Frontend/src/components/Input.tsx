import React, { useReducer, useEffect } from "react";
import { validate } from "../functions/validators";

interface Validator {
  (value: string): boolean;
}

interface InputProps {
  id: string;
  element: "input" | "textarea";
  type?: string;
  placeholder?: string;
  rows?: number;
  label: string;
  validators?: Validator[];
  errorText?: string;
  onInput: (id: string, value: string, isValid: boolean) => void;
  value?: string;
  valid?: boolean;
}

interface InputState {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

type InputAction =
  | { type: "CHANGE"; val: string; validators: Validator[] }
  | { type: "TOUCH" };

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input: React.FC<InputProps> = ({
  id,
  element,
  type = "text",
  placeholder,
  rows = 3,
  label,
  validators = [],
  errorText,
  onInput,
  value: initialValue = "",
  valid: initialValid = false,
}) => {
  // Initialize state with props
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isTouched: false,
    isValid: initialValid,
  });

  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "CHANGE", val: event.target.value, validators });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const inputClasses = `
    w-full 
    border 
    rounded-md 
    p-2 
    ${!isValid && isTouched ? "border-red-500 bg-red-100" : "border-gray-300 bg-gray-100"} 
    focus:outline-none 
    focus:ring-1 
    ${!isValid && isTouched ? "focus:ring-red-500" : "focus:ring-sky-500"}
  `;

  const elementToRender =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
        className={inputClasses}
      />
    ) : (
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
        className={inputClasses}
      />
    );

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className={`block text-sm font-bold mb-2 ${
          !isValid && isTouched ? "text-red-500" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      {elementToRender}
      {!isValid && isTouched && errorText && (
        <p className="text-red-500 mt-1 text-sm">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
