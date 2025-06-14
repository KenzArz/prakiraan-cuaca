import "../css/footer.css";
import Logo from "../assets/icons/cloudy.svg";
import Phone from "../assets/icons/contact/phone.svg";
import Mail from "../assets/icons/contact/mail.svg";
import Bmkg from "../assets/logo/bmkg.png";
import Windy from "../assets/logo/windy.png";
import Weatherapi from "../assets/logo/weather-api.png";
import Github from "../assets/icons/social-media/github.svg";
import Linkedin from "../assets/icons/social-media/linkedin.svg";
import Insta from "../assets/icons/social-media/insta.svg";
import Codewars from "../assets/icons/social-media/codewars.svg";
import FreeCodeCamp from "../assets/icons/social-media/free-code-camp.svg";
import Discord from "../assets/icons/social-media/discord.svg";

export default function () {
	return (
		<>
			<footer className="footer">
				<div className="footer-container">
					<div className="footer-section">
						<div className="logo">
							<img src={Logo} alt="Cloudy" />
							<p>Cloudy</p>
						</div>
						<h3>Contact Kami</h3>
						<div className="icon">
							<img src={Phone} alt="phone" />
							<div className="icon-info">
								<h4>Contact Center</h4>
								<h4>+62895112345672</h4>
							</div>
						</div>
						<div className="icon">
							<img src={Mail} alt="mail" />
							<div className="icon-info">
								<h4>loremipsum@gmail.com</h4>
							</div>
						</div>
					</div>
					<div className="footer-section">
						<h3>Thanks to</h3>
						<div className="icon">
							<a href="https://data.bmkg.com" target="_blank">
								<img src={Bmkg} alt="BMKG" />
								<div className="icon-info">
									<h4>BMKG</h4>
								</div>
							</a>
						</div>
						<div className="icon">
							<a href="https://windy.com/" target="_blank">
								<img src={Windy} alt="Windy" />
								<div className="icon-info">
									<h4>Windy</h4>
								</div>
							</a>
						</div>
						<div className="icon">
							<a href="https://weatherapi.com/" target="_blank">
								<img
									src={Weatherapi}
									alt="Weather-api"
									style={{ borderRadius: 100 }}
								/>
								<div className="icon-info">
									<h4>Weatherapi</h4>
								</div>
							</a>
						</div>
					</div>
					<div className="footer-section">
						<h3>Tautan terkait</h3>
						<div className="links">
							<a href="/#root">Home</a>
							{/* <a href="/cuaca">Cuaca</a>
							<a href="/aqi">Kualitas Udara</a> */}
							<a href="blog">Blog</a>
							<a href="/about">About</a>
						</div>
					</div>
					<div className="footer-section">
						<h3>Ikuti saya</h3>
						<div className="icon">
							<a href="https://github.com/KenzArz" target="_blank">
								<img src={Github} alt="Github" />
							</a>
							<a href="https://linkedin.com/in/aldi-wijaya/" target="_blank">
								<img src={Linkedin} alt="Linkedin" />
							</a>
							<a href="https://instagram.com/masami.jsx/" target="_blank">
								<img src={Insta} alt="Instagram" />
							</a>
						</div>
						<div className="icon">
							<a href="https://codewars.com/users/Masami;" target="_blank">
								<img src={Codewars} alt="Codewars" />
							</a>
							<a href="https://freecodecamp.org/Masami" target="_blank">
								<img src={FreeCodeCamp} alt="FreeCodeCamp" />
							</a>
							<a
								href="https://discordapp.com/users/863710365288497153"
								target="_blank"
							>
								<img src={Discord} alt="Discord" />
							</a>
						</div>
					</div>
				</div>
				<div className="copyright">
					<p>Created by Aldi Wijaya | © 2025</p>
				</div>
			</footer>
		</>
	);
}
