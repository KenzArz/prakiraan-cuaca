import Temperature from "../assets/icons/weathers-info/temperature.svg";
import Humidity from "../assets/icons/weathers-info/humidity.svg";

import "../css/card-info.css";
import "../css/card-schedule.css";
import zone from "../js/zone.js";
import { image } from "../js/weather.js";

import { useState, useEffect } from "react";

export default function ({ data }) {
	const [info, setInfo] = useState(data[0].cuaca[0]);
	const date = new Date();

	function handleClick(indeks) {
		setInfo(data[0].cuaca[indeks]);
	}

	function CardSchedule() {
		return (
			<>
				<div className="schedule">
					<div className="card-schedule" onClick={() => handleClick(0)}>
						<p>Hari Ini</p>
					</div>
					<div className="card-schedule" onClick={() => handleClick(1)}>
						<p>Besok</p>
					</div>
					<div className="card-schedule" onClick={() => handleClick(2)}>
						<p>Lusa</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<CardSchedule />
			<div className="card-info">
				{info.map((m, indeks) => (
					<div className="card" key={indeks}>
						<h3>
							{data[0].lokasi.desa}, {new Date(m.local_datetime).getHours()}:
							{new Date(m.local_datetime).getMinutes() < 10 ? "0" : ""}
							{new Date(m.local_datetime).getMinutes()} {zone()}
						</h3>
						<div className="detail-informations">
							<div className="icon-informations">
								<h4>{m.weather_desc}</h4>
								<div className="icon">
									<img src={Temperature} />
									<p>{m.t}°</p>
								</div>
								<div className="icon">
									<img src={Humidity} />
									<p>{m.hu}%</p>
								</div>
							</div>
							<img
								src={
									image.find(
										l =>
											l.key.find(
												k => k.toLowerCase() == m.weather_desc.toLowerCase()
											) && (date.getHours() < 18 ? l.isDay : !l.isDay)
									).svg
								}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
