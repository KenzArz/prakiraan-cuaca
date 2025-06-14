import NavBar from "../components/navbar";
import Title from "../components/title";
import BannerInfo from "../components/banner-info";
import CardInfo from "../components/card-info";
import AqiCard from "../components/aqi-card";
import Radar from "../components/radar";
import Article from "../components/artickle";
import Footer from "../components/footer";

export default function Home() {
	return (
		<>
			<main>
				<NavBar />
				<Title title={"Ramalan Cuaca"} detail={"Sabtu, 22 Maret, 2025"} />
				<BannerInfo />
				<CardInfo />
			</main>
			<Footer />
		</>
	);
}
