import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

import books from "../../books.json";

const categories = [
	"Choose a genre",
	"Business",
	"Fiction",
	"Horror",
	"Adventure",
];

const TopSellers = () => {
	const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

	const filteredBooks =
		selectedCategory === "Choose a genre"
			? books
			: books.filter(
					(book) => book.category === selectedCategory.toLowerCase()
			  );

	return (
		<div className=" py-10">
			<h2 className="text-3xl font-semibold mb-6">Sort Books</h2>
			{/* category filtering */}
			<div className="mb-8 flex items-center">
				<select
					onChange={(e) => setSelectedCategory(e.target.value)}
					name="category"
					id="category"
					className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
				>
					{categories.map((category, index) => (
						<option key={index} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto p-5  w-4/5 ">
				{filteredBooks.length > 0 &&
					filteredBooks.map((book, index) => (
						<BookCard key={index} book={book} />
					))}
			</div>
		</div>
	);
};

export default TopSellers;
