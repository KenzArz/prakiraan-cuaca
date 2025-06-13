import "../css/radar.css";

export default function () {
	return (
		<>
			<div className="map">
				<iframe src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=rain&product=ecmwf&level=surface&lat=-6.2029824&lon=106.8040192"></iframe>
			</div>
		</>
	);
}
