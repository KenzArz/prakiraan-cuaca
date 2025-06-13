import wind from "../assets/icons/weathers-info/wind.svg";
import Humidity from "../assets/icons/weathers-info/humidity.svg";
import uv from "../assets/icons/weathers-info/uv.svg";
import cloud from "../assets/icons/weathers-info/cloud.svg";
import compass from "../assets/icons/weathers-info/compass.svg";
import temperature from "../assets/icons/weathers-info/temperature.svg";

import "../css/banner-info.css";
import zone from "../js/zone.js";
import { image } from "../js/weather.js";

export default function ({ data, time, data2 }) {
	console.log(data2);
	const body = data[0];
	const currentWeather = body.cuaca[0][0];
	const date = new Date();
	const currentImage = image.find(
		m =>
			m.key.find(
				k => k.toLowerCase() == currentWeather.weather_desc.toLowerCase()
			) && (date.getHours() < 18 ? m.isDay : !m.isDay)
	);

	return (
		<>
			<div className="banner">
				<img src={currentImage.image} />
				<div className="banner-content wl">
					<div className="time-location">
						<h4>{body.lokasi.desa}</h4>
						<h1>{time}</h1>
						<h1>{zone()}</h1>
					</div>
					<div className="banner-info">
						<div className="informations">
							<div className="informations-data">
								<img src={wind} />
								<h4>Kecepatan Angin</h4>
								<h4>{currentWeather.ws} km/jam</h4>
							</div>
							<div className="informations-data">
								<img src={Humidity} />
								<h4>Kelembapan</h4>
								<h4>{currentWeather.hu}%</h4>
							</div>
						</div>
						<div className="informations">
							<div className="informations-data">
								<img src={uv} />
								<h4>UV Index</h4>
								<h4>{data2.current.uv}</h4>
							</div>
							<div className="informations-data">
								<img src={cloud} />
								<h4>Awan</h4>
								<h4>{currentWeather.tcc}%</h4>
							</div>
						</div>
						<div className="informations">
							<div className="informations-data">
								<img src={compass} />
								<h4>Arah Angin</h4>
								<h4>{currentWeather.wd}</h4>
							</div>
							<div className="informations-data">
								<img src={temperature} />
								<h4>Suhu</h4>
								<h4>{currentWeather.t}</h4>
							</div>
						</div>
					</div>
					<div className="cuaca">
						<img src={currentImage.svg} />
						<h4>{currentWeather.weather_desc}</h4>
					</div>
				</div>
				<div className="banner-content ws">
					<div className="top-details">
						<div className="weather">
							<h1>{currentWeather.ws} °C</h1>
							<h4>{currentWeather.weather_desc}</h4>
							<h4>{body.lokasi.desa}</h4>
						</div>
						<div className="weather-icon">
							<img src={currentImage.svg} />
						</div>
					</div>
					<div className="bottom-details">
						<div className="icons-detail">
							<h4>{currentWeather.ws} km/h</h4>
							<h4>Angin</h4>
						</div>
						<div className="icons-detail">
							<h4>{currentWeather.hu}%</h4>
							<h4>Kelembapan</h4>
						</div>
						<div className="icons-detail">
							<h4>{data2.current.uv}</h4>
							<h4>UV Index</h4>
						</div>
						<div className="icons-detail">
							<h4>{currentWeather.tcc}%</h4>
							<h4>Awan</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
