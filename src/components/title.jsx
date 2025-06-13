import "../css/title.css";

export default function ({ title, detail }) {
	return (
		<>
			<div className="title">
				<h1>{title}</h1>
				<h4>{detail}</h4>
			</div>
		</>
	);
}
