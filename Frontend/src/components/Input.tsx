import React, { useReducer, useEffect } from "react";
import { validate } from "../functions/validators";

interface InputProps {
	id: string;
	element: "input" | "textarea";
	type?: string;
	placeholder?: string;
	rows?: number;
	label: string;
	validators?: any[]; // Replace `any` with your validator types if available.
	errorText?: string;
	onInput: (id: string, value: string, isValid: boolean) => void;
}

interface InputState {
	value: string;
	isTouched: boolean;
	isValid: boolean;
}

type InputAction =
	| { type: "CHANGE"; val: string; validators?: any[] }
	| { type: "TOUCH" };

const inputReducer = (state: InputState, action: InputAction): InputState => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validators || []),
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
	validators,
	errorText,
	onInput,
}) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: "",
		isTouched: false,
		isValid: false,
	});

	const { value, isValid } = inputState;

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
    ${
			!inputState.isValid && inputState.isTouched
				? "border-red-500 bg-red-100"
				: "border-gray-300 bg-gray-100"
		} 
    focus:outline-none 
    focus:ring-2 
    ${
			!inputState.isValid && inputState.isTouched
				? "focus:ring-red-500"
				: "focus:ring-purple-500"
		}
  `;

	const elementToRender =
		element === "input" ? (
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
				className={inputClasses}
			/>
		) : (
			<textarea
				id={id}
				rows={rows}
				placeholder={placeholder}
				onChange={changeHandler}
				onBlur={touchHandler}
				value={inputState.value}
				className={inputClasses}
			/>
		);

	return (
		<div className="mb-4">
			<label
				htmlFor={id}
				className={`block text-sm font-bold mb-2 ${
					!inputState.isValid && inputState.isTouched
						? "text-red-500"
						: "text-gray-700"
				}`}
			>
				{label}
			</label>
			{elementToRender}
			{!inputState.isValid && inputState.isTouched && errorText && (
				<p className="text-red-500 mt-1 text-sm">{errorText}</p>
			)}
		</div>
	);
};

export default Input;
