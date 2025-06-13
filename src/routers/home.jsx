import NavBar from "../components/navbar";
import Title from "../components/title";
import BannerInfo from "../components/banner-info";
import CardInfo from "../components/card-info";
import AqiCard from "../components/aqi-card";
import Radar from "../components/radar";
import Article from "../components/artickle";
import Footer from "../components/footer";
import Loading from "../components/loading.jsx";
import { useEffect, useState } from "react";

export default function Home() {
	const [weather, setWeather] = useState({ data: [] });
	const [infoFullWeather, setInfoFUllWeather] = useState();
	const [loading, setLoading] = useState(true);
	const userCordinate = JSON.parse(localStorage.getItem("cordinate"));
	useEffect(() => {
		const getWeather = async () => {
			const response = await fetch(
				`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${userCordinate.coordinate}`
			);
			const body = await response.json();
			setWeather(body);
		};
		const getFullWeather = async () => {
			const response = await fetch(
				`http://api.weatherapi.com/v1/current.json?key=4d823b1464ae4e98bdd30441252703&q=${userCordinate.city}&aqi=yes`
			);
			const body = await response.json();
			setInfoFUllWeather(body);
			setLoading(false);
		};
		getWeather();
		getFullWeather();
	}, []);
	const [time, setTime] = useState(null);

	useEffect(() => {
		if (!weather.data) return;
		const updateTime = () => {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();

			const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
			setTime(formattedTime);
		};
		updateTime();
		const intervalId = setInterval(updateTime, 1000);
		return () => clearInterval(intervalId);
	}, [weather.data]);

	if (loading) return <Loading />;
	const locatDate = new Date().toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<>
			<main>
				<NavBar />
				<Title title={"Ramalan Cuaca"} detail={locatDate} />
				<BannerInfo data={weather.data} time={time} data2={infoFullWeather} />
				<CardInfo data={weather.data} data2={infoFullWeather} />
				<Title
					title={"Kualitas Udara"}
					detail={"Konsentrasi Partikulat (PM 2.5)"}
				/>
				<AqiCard data={weather.data} />
				<Title title={"Map Akumulasi Cuaca"} />
				<Radar data={weather} />
				<Title title={"Artikel Lainnya"} />
				<Article />
			</main>
			<Footer />
		</>
	);
}
