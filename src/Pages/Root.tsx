import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import useMainContext from "../utils/hooks/useMainContext";
import { useEffect } from "react";
import Footer from "./components/Footer";

const Root = () => {
	const { setBookmarks } = useMainContext();
	useEffect(() => {
		const booksmark = localStorage.getItem("bookmarks");
		console.log(booksmark);
		if (booksmark != null) {
			setBookmarks(JSON.parse(booksmark));
			console.log("testdata fny shit");
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<header className="sticky top-0 z-25">
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
        <Footer />
      </footer>
		</div>
	);
};
export default Root;
