import NavBar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

import "../css/blog.css";
import PM from "../../public/images/articles/partikulat-materi.png";

export default function () {
	const navigate = useNavigate();
	return (
		<>
			<main>
				<NavBar />
				<Title title={"Blog"} detail={"Sabtu, 22 maret 2025"} />
				<div className="blog">
					<div className="blog-container">
						<div className="article a1" onClick={() => navigate("/blog/1")}>
							<img src={PM} alt="PM 2.5" />
							<div className="article-info">
								<h3>Konsentrasi Partikulat PM 2.5</h3>
								<p>Apa PM 2.5? dan apakah itu berbahaya?</p>
							</div>
						</div>
						<div className="article a2" onClick={() => navigate("/blog/2")}>
							<img src={PM} alt="" />
							<div className="article-info">
								<h3>Kenali apa itu UV indeks</h3>
								<p>Indeks berapa yang cocok untuk kulit?</p>
							</div>
						</div>
						<div className="article a3" onClick={() => navigate("/blog/3")}>
							<img src={PM} alt="" />
							<div className="article-info">
								<h3>Apa itu kelembapan udara?</h3>
								<p>Apa efek dari kelembapan yang tinggi?</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
