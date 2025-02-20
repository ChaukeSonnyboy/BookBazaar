import { useParams } from "react-router-dom";

import Input from "../components/Input";
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from "../functions/validators";

import books from "../books.json";

const UpdatePlace = () => {
    const { id } = useParams();
    
    console.log(id);

	const selectedBook = books.find((book) => book._id === Number(id));

	console.log(selectedBook);

	if (!selectedBook) {
		return (
			<div className="center">
				<h2>Could not find place!</h2>
			</div>
		);
	}

	return (
		<>
			<form className="mx-auto w-full max-w-2xl p-4 shadow-md rounded-lg bg-white">
				<Input
					id="title"
					element="input"
					type="text"
					label="Title"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid title."
					onInput={() => {}}
					value={selectedBook.title}
					valid={true}
				/>

				<Input
					id="description"
					element="textarea"
					label="Description"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid description (min. 5 characters)."
					onInput={() => {}}
					value={selectedBook.description}
					valid={true}
				/>
				<Input
					id="author"
					element="input"
					type="text"
					label="Book Author"
					placeholder="Please enter book author name"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid book author."
					onInput={() => {}}
					value={selectedBook.author}
					valid={true}
				/>
				<Input
					id="year"
					element="input"
					type="text"
					label="Publication Year"
					placeholder="Please enter book publication year"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid publication year."
					onInput={() => {}}
					value={selectedBook.year}
					valid={true}
				/>
				<Input
					id="price"
					element="input"
					label="Book Price"
					placeholder="Please enter book price"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid price."
					onInput={() => {}}
					value={selectedBook.newPrice}
					valid={true}
				/>

				<button className="btn-primary" type="submit" disabled={true}>
					UPDATE PLACE
				</button>
			</form>
		</>
	);
};

export default UpdatePlace;
