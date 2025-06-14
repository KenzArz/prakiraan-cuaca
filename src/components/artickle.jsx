import "../css/articles.css";

import { BlogContent } from "../js/blog-content";

export default function () {
	return (
		<>
			<div className="more-article">
				{BlogContent.map((article, index) => (
					<div className="article-card" key={index}>
						<img src={article.image} />
						<p>{article.title}</p>
					</div>
				))}
			</div>
		</>
	);
}
