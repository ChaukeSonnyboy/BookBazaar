// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getImgUrl } from "../functions/getImgUrl";

import books from "../books.json";

const BookInfo = () => {
	const { id } = useParams();
	// const [movie, setMovie] = useState({});

	// const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

	// useEffect(() => {
	// 	const key = import.meta.env.VITE_API_KEY;

	// 	async function fetchMovie() {
	// 		const response = await fetch(
	// 			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`
	// 		);
	// 		const json = await response.json();
	// 		setMovie(json);
	// 		console.log(json);
	// 	}
	// 	fetchMovie();
	// }, [params.id]);

	const viewedBook = books.find((book) => book._id === Number(id));

	return (
		<section className="flex justify-center py-14  content-center gap-10 flex-wrap">
			<div className="md:max-w-sm max-w-[80%] flex items-center">
				<img
					className="rounded-t-xl "
					src={`${getImgUrl(viewedBook?.coverImage)}`}
					alt={viewedBook?.title}
				/>
			</div>

			<div className="max-w-2xl text-lg px-5">
				<h1 className="text-4xl font-bold my-3 text-center lg:text-left">
					{viewedBook?.title}
				</h1>

				<p className="my-4">{viewedBook?.description}</p>

				<p className="my-4">
					<span className="mr-2 font-bold">Author:</span>
					<span>{viewedBook?.author}</span>
				</p>

				<p className="my-4">
					<span className="mr-2 font-bold">Year:</span>
					<span>{viewedBook?.year}</span>
				</p>

				<p className="my-4">
					<span className="mr-2 font-bold">Price:</span>
					<span>{viewedBook?.newPrice}</span>
				</p>
				<p className="my-4">
					<span className="mr-2 font-bold">New Book Price:</span>
					<span>{viewedBook?.oldPrice}</span>
				</p>

				<p className="my-4">
					<span className="mr-2 font-bold">Seller Name:</span>
					<span>sonnyboy chauke</span>
				</p>
				<p className="my-4">
					<span className="mr-2 font-bold">Seller Contact No:</span>
					<span>073 637 6800</span>
				</p>
				<p className="my-4">
					<span className="mr-2 font-bold">Seller Email:</span>
					<span>sonnyboy99chauke@gmail.com</span>
				</p>

				{/* <FaExternalLinkAlt className="w-4 h-4 " /> */}
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</div>
		</section>
	);
};

export default BookInfo;
