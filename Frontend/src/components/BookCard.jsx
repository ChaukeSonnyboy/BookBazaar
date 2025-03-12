import { getImgUrl } from "../functions/getImgUrl";

import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
	return (
		<div
			className="max-w-sm border-2 border-transparent hover:border-sky-500 cursor-pointer hover:scale-105 transition-all duration-200
				rounded-t-lg"
		>
			<div>
				<Link to={`/books/${book._id}`}>
					<img
						src={`${getImgUrl(book?.coverImage)}`}
						alt=""
						className="w-full bg-cover"
					/>
				</Link>
			</div>

			<div className="">
				<Link to={`/books/${book._id}`}>
					<h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
						{book?.title}
					</h3>
				</Link>
				{/* <p className="text-gray-600 mb-5">
						{book?.description.length > 80
							? `${book.description.slice(0, 80)}...`
							: book?.description}
					</p> */}
				<p className="font-medium mb-5">
					R{book?.newPrice}{" "}
					<span className="line-through font-normal ml-2">
						R {book?.oldPrice}
					</span>
				</p>
				{/* <button 
                    onClick={() => handleAddToCart(book)}
                    className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                        <FiShoppingCart className="" />
                        <span>Add to Cart</span>
                    </button> */}
			</div>
		</div>
	);
};

export default BookCard;
