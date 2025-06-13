import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Title from "../components/title";
import Footer from "../components/footer";

import Avatar from "../assets/icons/avatar.svg";
import Linkedin from "../assets/icons/social-media/linkedin.svg";
import WA from "../assets/icons/social-media/whatsapp.svg";
import X from "../assets/icons/social-media/x.svg";
import FB from "../assets/icons/social-media/facebook.svg";

import { BlogContent } from "../js/blog-content.js";

import "../css/blogPost.css";
import "../css/articles.css";

export default function BlogPost() {
	const navigate = useNavigate();
	const { id } = useParams();
	const post = BlogContent.find(m => m.id == id);
	const formatDate = dateString => {
		return new Date(dateString).toLocaleDateString("id-ID", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<>
			<main>
				<Navbar />
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 1.5 }}
					className="blog-container"
				>
					<div className="blog-header">
						<Title title={post.title} />
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.1 }}
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="published"
							>
								<img src={Avatar} alt="" />
								<div className="author">
									<h5>{post.author}</h5>
									<p>{formatDate(post.publishedDate)}</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 1.5 }}
						className="blog-content"
					>
						<img src={post.image} alt="pm 2.5" />
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.5, delay: 0.2 }}
							className="blog-post"
						>
							{post.content.map((content, index) => (
								<>
									<h3>{content.head}</h3>
									{content.content.split("\n").map((paragraph, lineIndex) => (
										<p key={lineIndex}>{paragraph}</p>
									))}
								</>
							))}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.5 }}
							className="share"
						>
							<h3>Bagikan Postingan Ini</h3>
							<div className="share-icon">
								<a href="">
									<img src={Linkedin} alt="Linkedin" />
								</a>
								<a href="">
									<img src={WA} alt="WhatsApp" />
								</a>
								<a href="">
									<img src={X} alt="X" />
								</a>
								<a href="">
									<img src={FB} alt="facebook" />
								</a>
							</div>
						</motion.div>
					</motion.div>
					<Title title={"Artikel Lainnya"} />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 1 }}
						className="more-article"
					>
						{BlogContent.filter(article => article.id !== id).map(article => (
							<div
								key={article.id}
								className="article-card"
								onClick={() => navigate(`/blog/${article.id}`)}
							>
								<img src={article.image} alt={article.title} />
								<h3>{article.title}</h3>
							</div>
						))}
					</motion.div>
				</motion.div>
			</main>
			<Footer />
		</>
	);
}
