import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import "./css/App.css";
import Loading from "./components/loading.jsx";
import BlogPost from "./routers/blogPost.jsx";
import Code from "./js/areaCode.json";

function App() {
	const Home = lazy(() => import("./routers/home.jsx"));
	const Cuaca = lazy(() => import("./routers/cuaca.jsx"));
	const About = lazy(() => import("./routers/about.jsx"));
	const Blog = lazy(() => import("./routers/blog.jsx"));

	const [position, setPosition] = useState(null);

	function ScrollToTop() {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function () {},
			function () {},
			{}
		);

		navigator.geolocation.getCurrentPosition(
			position => {
				setPosition({
					lat: position.coords.latitude,
					long: position.coords.longitude,
				});
			},
			console.log,
			{
				enableHighAccuracy: true,
				timeout: 10000,
				maximumAge: 60000,
			}
		);
	}, []);
	useEffect(() => {
		if (!position || localStorage.getItem("cordinate")) return;
		(async () => {
			const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.long}&zoom=18&addressdetails=1`;
			const response = await fetch(url, {
				headers: {
					"Accept-Language": "en-US,en;q=0.9",
				},
			});
			const body = await response.json();
			console.log(body);
			const currentWilayah = Code.find(
				cordinate =>
					cordinate.city.toLowerCase() == body.address.village.toLowerCase()
			);
			localStorage.setItem("cordinate", JSON.stringify(currentWilayah));
			location.reload();
		})();
	}, [position]);

	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path="/cuaca"
					element={
						<Suspense fallback={<Loading />}>
							<Cuaca />
						</Suspense>
					}
				/>
				<Route
					path="/about"
					element={
						<Suspense fallback={<Loading />}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path="/blog"
					element={
						<Suspense fallback={<Loading />}>
							<Blog />
						</Suspense>
					}
				/>
				<Route path="/blog/:id" element={<BlogPost />} />
				<Route
					path="*"
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
