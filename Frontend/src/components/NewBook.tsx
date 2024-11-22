import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from "../functions/validators";

interface InputState {
	value: string;
	isValid: boolean;
}

interface FormState {
	inputs: {
		[key: string]: InputState;
	};
	isValid: boolean;
}

type FormAction = {
	type: "INPUT_CHANGE";
	inputId: string;
	value: string;
	isValid: boolean;
};

const formReducer = (state: FormState, action: FormAction): FormState => {
	switch (action.type) {
		case "INPUT_CHANGE": {
			let formIsValid = true;
			for (const inputId in state.inputs) {
				if (inputId === action.inputId) {
					formIsValid = formIsValid && action.isValid;
				} else {
					formIsValid = formIsValid && state.inputs[inputId].isValid;
				}
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.inputId]: { value: action.value, isValid: action.isValid },
				},
				isValid: formIsValid,
			};
		}
		default:
			return state;
	}
};

const NewBook: React.FC = () => {
	const [formState, dispatch] = useReducer(formReducer, {
		inputs: {
			title: { value: "", isValid: false },
			description: { value: "", isValid: false },
			address: { value: "", isValid: false },
		},
		isValid: false,
	});

	const inputHandler = useCallback(
		(id: string, value: string, isValid: boolean) => {
			dispatch({
				type: "INPUT_CHANGE",
				inputId: id,
				value,
				isValid,
			});
		},
		[]
	);

	const placeSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(formState.inputs); // send this to the backend!
	};

	return (
		<form
			className="mx-auto w-full max-w-2xl p-4 shadow-md rounded-lg bg-white"
			onSubmit={placeSubmitHandler}
		>
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title."
				onInput={inputHandler}
			/>
			<Input
				id="description"
				element="textarea"
				label="Description"
				validators={[VALIDATOR_MINLENGTH(5)]}
				errorText="Please enter a valid description (at least 5 characters)."
				onInput={inputHandler}
			/>
			<Input
				id="address"
				element="input"
				label="Address"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid address."
				onInput={inputHandler}
			/>
			<button type="submit" disabled={!formState.isValid}>
				ADD PLACE
			</button>
		</form>
	);
};

export default NewBook;
