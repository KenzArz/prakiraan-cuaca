import "../css/aqi-card.css";

import { useState, useEffect, useRef } from "react";
import Good from "../assets/icons/air-quality/good.svg";
import Moderate from "../assets/icons/air-quality/moderate.svg";
import Unhealthy from "../assets/icons/air-quality/unhealthy.svg";
import VeryUnhealthy from "../assets/icons/air-quality/very-unhealthy.svg";
import Hazardous from "../assets/icons/air-quality/hazardous.svg";
import Arrow from "../assets/icons/arrow.svg";

const cities = [
	{ name: "Pekanbaru" },
	{ name: "Medan" },
	{ name: "Palembang" },
	{ name: "Bekasi" },
	{ name: "Karawang" },
	{ name: "Bandung" },
	{ name: "Surabaya" },
	{ name: "Yogyakarta" },
	{ name: "Cirebon" },
	{ name: "Kota Jambi" },
];

// Tambahkan kota dari localStorage
const savedCity = JSON.parse(localStorage.getItem("cordinate"))?.city;
if (savedCity) {
	cities.unshift({ name: savedCity });
}

export default function AqiCarousel() {
	const [aqiCity, setAqiCity] = useState([]);
	const apiKey = "4d823b1464ae4e98bdd30441252703";

	useEffect(() => {
		const fetchAqiData = async () => {
			try {
				const promises = cities.map(async city => {
					const response = await fetch(
						`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.name}&aqi=yes`
					);
					const body = await response.json();
					const aqi = body.current?.air_quality?.pm2_5;

					// Klasifikasi AQI
					if (aqi > 0 && aqi <= 15.5) {
						return { ...city, icon: Good, value: aqi, status: "Baik" };
					} else if (aqi > 15.5 && aqi <= 55.4) {
						return { ...city, icon: Moderate, value: aqi, status: "Normal" };
					} else if (aqi > 55.4 && aqi <= 150.4) {
						return {
							...city,
							icon: Unhealthy,
							value: aqi,
							status: "Tidak Sehat",
						};
					} else if (aqi > 150.4 && aqi <= 250.4) {
						return {
							...city,
							icon: VeryUnhealthy,
							value: aqi,
							status: "Mematikan",
						};
					} else if (aqi > 250.4) {
						return {
							...city,
							icon: Hazardous,
							value: aqi,
							status: "Berbahaya",
						};
					}
					return {
						...city,
						icon: null,
						value: "N/A",
						status: "Tidak Tersedia",
					};
				});

				const results = await Promise.all(promises); // Tunggu semua request selesai
				setAqiCity(results); // Update state dengan data lengkap
			} catch (error) {
				console.error("Gagal mengambil data AQI:", error);
			}
		};

		fetchAqiData();
	}, []);
	console.log(aqiCity);

	const trackRef = useRef(null);
	const containerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCards, setVisibleCards] = useState(5);
	const cardRef = useRef(null);
	const [cardWidth, setCardWidth] = useState(0);

	useEffect(() => {
		const updateCardMetrics = () => {
			if (cardRef.current && containerRef.current) {
				const gap = parseInt(window.getComputedStyle(trackRef.current).gap);
				const cardWidthWithGap = cardRef.current.offsetWidth + gap;

				setCardWidth(cardWidthWithGap);
				setVisibleCards(
					Math.floor(containerRef.current.offsetWidth / cardWidthWithGap)
				);
			}
		};

		updateCardMetrics();
		window.addEventListener("resize", updateCardMetrics);
		return () => window.removeEventListener("resize", updateCardMetrics);
	}, []);

	const handleNavigation = direction => {
		const newIndex =
			direction === "next"
				? Math.min(currentIndex + 1, cities.length - visibleCards)
				: Math.max(currentIndex - 1, 0);

		setCurrentIndex(newIndex);
		trackRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
	};
	return (
		<div className="aqi-carousel-container" ref={containerRef}>
			<button
				className="navigation-button navigation-button--prev"
				onClick={() => handleNavigation("prev")}
				disabled={currentIndex === 0}
			>
				<img src={Arrow} alt="Previous" />
			</button>

			<div className="carousel-wrapper">
				<div className="carousel-track" ref={trackRef}>
					{aqiCity.map((city, index) => (
						<div
							className="aqi-card"
							key={index}
							ref={index === 0 ? cardRef : null}
						>
							<div className="location">
								<p>{city.name}</p>
							</div>
							<div className="time">
								<p>14:33 WIB</p>
							</div>
							<img src={city.icon} alt={city.status} />
							<div className="aqi-indeks">
								<p>
									{city.value} µg/m<sup>3</sup>
								</p>
							</div>
							<div className="status">
								<p>{city.status}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<button
				className="navigation-button navigation-button--next"
				onClick={() => handleNavigation("next")}
				disabled={currentIndex >= cities.length - visibleCards}
			>
				<img src={Arrow} alt="Next" />
			</button>
		</div>
	);
}
