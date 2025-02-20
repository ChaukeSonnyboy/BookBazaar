import "../../App.css";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="  flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 ">
			<div className="  md:w-1/2 w-full flex items-center md:justify-end">
				<img
					src="https://media.istockphoto.com/id/1328717786/vector/books-swap-exchange-or-crossing-vector-illustration-with-hand-gives-book-to-friend.jpg?s=612x612&w=0&k=20&c=5CQ5hVSDu6Kb9PkZBavYLao4e8u830Uq7RXNKfE4tk4="
					alt=""
				/>
			</div>

			<div className=" md:w-1/2 w-full">
				<h1 className="md:text-5xl text-2xl font-medium mb-7">
					Your Campus Book Exchange Starts Here!
				</h1>
				<p className="mb-10">
					Buy and sell textbooks easily with BookBazaar. Senior students can
					sell their old textbooks and new students can find the books they need
					at affordable prices. Save money, clear out old books and connect with
					other students. Start exploring today and make your studies easier!
				</p>

				<div className="flex items-center gap-4">
					<Link to="/books" className="btn-primary">
						BUY A BOOK
					</Link>
					<Link to="/books/new" className="btn-secondary">
						SELL MY BOOK
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Hero;
