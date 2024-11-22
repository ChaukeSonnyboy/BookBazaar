import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Books from "../pages/home/Books";
import BookInfo from "../components/BookInfo";
import NewBook from "../components/NewBook";

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
				path: "/listbook",
				element: <NewBook />,
			},
			{
				path: "book/:id",
				element: <BookInfo />,
			},
		],
	},
]);

export default router;
