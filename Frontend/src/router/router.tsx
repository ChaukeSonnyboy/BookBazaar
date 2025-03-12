import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Books from "../pages/Books";
import BookInfo from "../components/BookInfo";
import NewBook from "../components/NewBook";
import UpdateBook from "../components/UpdateBook";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/books",
				element: <Books />,
			},
			{
				path: "/books/:id",
				element: <BookInfo />, // Ensure this route shows book details
			},
			{
				path: "/books/new",
				element: <NewBook />,
			},
			{
				path: "/books/:id/edit", // Use a consistent pattern for edit
				element: <UpdateBook />,
			},
		],
	},
]);

export default router;
