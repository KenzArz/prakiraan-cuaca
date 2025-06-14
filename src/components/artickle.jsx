import { useNavigate } from "react-router-dom";
import "../css/articles.css";

import { BlogContent } from "../js/blog-content";

export default function () {
	const navigate = useNavigate();
	return (
		<>
			<div className="more-article">
				{BlogContent.map((article, index) => (
					<div
						className="article-card"
						key={index}
						onClick={() => navigate(`/blog/${index + 1}`)}
					>
						<img src={article.image} />
						<p>{article.title}</p>
					</div>
				))}
			</div>
		</>
	);
}
