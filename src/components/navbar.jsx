import { useState } from "react";
import "../css/navbar.css";
import Logo from "../assets/icons/cloudy.svg";

export default function Navbar() {
	const [isSidebarActive, setIsSidebarActive] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="logo">
					<img src={Logo} alt="Cloudy" />
					<p>Cloudy</p>
				</div>

				<button
					className={`hamburger ${isSidebarActive ? "active" : ""}`}
					onClick={() => setIsSidebarActive(!isSidebarActive)}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className="navbar-nav">
					<a href="/#root">Home</a>
					{/* <a href="/cuaca">Cuaca</a>
					<a href="/aqi">Kualitas Udara</a> */}
					<a href="/blog">Blog</a>
					<a href="/about">About</a>
				</div>

				<div className={`sidebar ${isSidebarActive ? "active" : ""}`}>
					<div className="sidebar-nav">
						<a href="/" onClick={() => setIsSidebarActive(false)}>
							Home
						</a>
						{/* <a href="/cuaca" onClick={() => setIsSidebarActive(false)}>
							Cuaca
						</a>
						<a href="/aqi" onClick={() => setIsSidebarActive(false)}>
							Kualitas Udara
						</a> */}
						<a href="/blog" onClick={() => setIsSidebarActive(false)}>
							Blog
						</a>
						<a href="/about" onClick={() => setIsSidebarActive(false)}>
							About
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
