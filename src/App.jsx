import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import "./css/App.css";
import Loading from "./components/loading.jsx";
import BlogPost from "./routers/blogPost.jsx";

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
				maximumAge: 0,
			}
		);
	}, []);

	useEffect(() => {
		if (!position || localStorage.getItem("cordinate")) return;
		(async () => {
			const url = `http://localhost:3000/coordinate`;
			const response = await fetch(url, {
				headers: {
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent":
						"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36",
					"Content-Type": "Application/json",
				},
				method: "POST",
				body: JSON.stringify(position),
			});
			const body = await response.json();
			if (body.statusCode != 200) return;
			localStorage.setItem("cordinate", JSON.stringify(body.address));
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
