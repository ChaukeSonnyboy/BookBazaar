import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";
import { GiBookshelf } from "react-icons/gi";

import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

// import avatarImg from "../assets/avatar.png"
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useAuth } from "../context/AuthContext";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Dashbord", href: "/admin-dashboard" },
	{ name: "System Users", href: "/users" },
	{ name: "My Books", href: "/books" },
	{ name: "Profile", href: "/listbook" },
];

const Navbar = () => {
	const [isMenuOpen, setIsOpenMenu] = useState(false);
	// const cartItems = useSelector(state => state.cart.cartItems);

	// const {currentUser, logout} = useAuth()

	// const handleLogOut = () => {
	//     logout()
	// }

	///To be deleted

	const [currentUser, setCurrentUser] = useState(true);

	const token = localStorage.getItem("token");

	return (
		<header className=" max-w-screen-2xl mx-auto px-4 py-6">
			<nav className=" flex justify-between items-center">
				{/* left div */}
				<div className=" flex items-center md:gap-16 gap-4">
					<Link to="/">
						<GiBookshelf className="size-10" />
						{/* <span className="hidden md:block">BookZaar</span> */}
					</Link>

					{/* search input */}
					<div className="relative sm:w-72 w-40 space-x-2">
						<IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

						<input
							type="text"
							placeholder="Search a book"
							className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
						/>
					</div>
				</div>

				{/* rigth div */}
				<div className="relative flex items-center md:space-x-3 space-x-2">
					<div>
						{currentUser ? (
							<>
								<button onClick={() => setIsOpenMenu(!isMenuOpen)}>
									<img
										src=""
										alt=""
										className={`size-7 rounded-full ${
											currentUser ? "ring-2 ring-blue-500" : ""
										}`}
									/>
								</button>

								{/* show dropdowns */}
								{isMenuOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
										<ul className="py-2">
											{navigation.map((item) => (
												<li
													key={item.name}
													onClick={() => setIsOpenMenu(false)}
												>
													<Link
														to={item.href}
														className="block px-4 py-2 text-sm hover:bg-sky-200"
													>
														{item.name}
													</Link>
												</li>
											))}
											<li>
												<button
													onClick={() => setCurrentUser(false)}
													className="block w-full text-left px-4 py-2 text-sm hover:bg-sky-200"
												>
													Logout
												</button>
											</li>
										</ul>
									</div>
								)}
							</>
						) : token ? (
							<Link to="/" className="border-b-2 border-primary">
								Dashboard
							</Link>
						) : (
							<Link to="/login">
								{" "}
								<HiOutlineUser className="size-6" />
							</Link>
						)}
					</div>

					<button className="hidden sm:block">
						<HiOutlineHeart className="size-6" />
					</button>

					{/* <Link
						to="/cart"
						className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
					>
						<HiOutlineShoppingCart className="" />
						{cartItems.length > 0 ? (
							<span className="text-sm font-semibold sm:ml-1">
								{cartItems.length}
							</span>
						) : (
							<span className="text-sm font-semibold sm:ml-1">0</span>
						)}
					</Link> */}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
