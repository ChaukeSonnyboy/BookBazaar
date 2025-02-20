/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Nunito", "sans - serif"],
				secondary: ["Nunito", "sans - serif"],
			},
		},
	},
	plugins: [],
};



// SLICE


// 			{/* <p className="text-gray-600 mb-5">
// 						{book?.description.length > 80
// 							? `${book.description.slice(0, 80)}...`
// 							: book?.description}
// 					</p> */}




// //////////////TOBE USED//////////////

// 					{/* <span className="line-through font-normal ml-2">
// 						R {book?.oldPrice}
// 					</span> */} //BOOKSHOP PRICE TO BE ADDED