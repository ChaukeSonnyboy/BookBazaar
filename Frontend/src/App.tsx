import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<main className="min-h-screen md:w-4/5 mx-auto  px-4 py-6 font-primary">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default App;
