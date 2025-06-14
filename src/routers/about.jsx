import { useNavigate } from "react-router-dom";

import NavBar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";

import "../css/about.css";
import Bmkg from "../../public/images/external-assets/bmkg.png";
import Windy from "../../public/images/external-assets/windy.png";
import Weatherapi from "../../public/images/external-assets/weatherapi.png";

export default function () {
	const navigate = useNavigate();
	return (
		<>
			<main>
				<NavBar />
				<Title title={"About"} detail={"Sabtu, 22 maret 2025"} />
				<div className="about">
					<div className="about-us">
						<p>
							Cloudy adalah aplikasi cuaca all-in-one yang menyediakan prakiraan
							cuaca akurat, monitoring kualitas udara (PM 2.5), dan konten
							edukasi meteorologi. Dengan memanfaatkan data dari penyedia pihak
							ketiga terpercaya yaitu BMKG, Weatherapi, dan windy, kami
							menyajikan informasi real-time tentang kondisi atmosfer.
						</p>
						<p>
							Fitur unggulan kami mencakup prediksi cuaca per jam, indeks AQI
							interaktif, dan blog pengetahuan cuaca yang terus diperbarui.
							Dirancang untuk kemudahan penggunaan dengan antarmuka yang bersih,
							Cloudy membantu Anda membuat keputusan tepat berdasarkan kondisi
							lingkungan terkini.
						</p>
					</div>
					<div className="third-party">
						<img src={Bmkg} alt="BMKG" />
						<p>
							Cloudy mengintegrasikan data resmi dari BMKG (Badan Meteorologi
							Klimatologi dan Geofisika) Indonesia guna menyediakan prakiraan
							cuaca terpercaya untuk kawasan Nusantara. Sebagai institusi
							pemerintah yang berwenang, BMKG memberikan dasar data meteorologi
							yang membantu Cloudy menyajikan informasi cuaca lokal yang akurat
							di seluruh wilayah Indonesia.
						</p>
					</div>
					<div className="third-party">
						<img src={Windy} alt="BMKG" />
						<p>
							Untuk visualisasi cuaca interaktif dan prediksi global, Cloudy
							memanfaatkan teknologi Windy yang menyediakan peta meteorologi
							real-time berbasis model ECMWF dan GFS. Windy memberikan data
							angin, tekanan atmosfer, dan sistem cuaca skala besar dengan
							resolusi tinggi hingga 9 km untuk akurasi maksimum.
						</p>
					</div>
					<div className="third-party">
						<img src={Weatherapi} alt="BMKG" />
						<p>
							Cloudy menggunakan WeatherAPI sebagai sumber utama prakiraan lokal
							global, menyediakan data komprehensif mencakup suhu, kondisi cuaca
							per jam, indeks UV, dan prediksi 14 hari untuk lebih dari 200
							negara. WeatherAPI mengumpulkan data dari ribuan stasiun darat dan
							satelit cuaca internasional.
						</p>
					</div>
					<div className="privacy">
						<div className="detail-privacy">
							<h3>Visi Dan Misi</h3>
							<p>
								Menyajikan ramalan cuaca real-time, pemantauan kualitas udara,
								dan pengetahuan meteorologi berbasis data multi-sumber dengan
								antarmuka intuitif
							</p>
						</div>
						<div className="detail-privacy">
							<h3>Keamanan Data</h3>
							<p>
								Cloudy berkomitmen penuh terhadap privasi pengguna. Kami tidak
								menggunakan cookie, pelacak, atau metode pengawasan apapun untuk
								memantau aktivitas pengguna.
							</p>
						</div>
					</div>
					<button className="get-started-btn" onClick={() => navigate("/root")}>
						Get Started
					</button>
				</div>
			</main>
			<Footer />
		</>
	);
}
