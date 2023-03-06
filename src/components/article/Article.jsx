import React from "react";
import "./article.css";
const Article = ({ imgURL, title, date }) => {
  return (
    <div className="gpt3__blog-container-article">
      <div className="gpt3__blog-container-article-image">
        <img src={imgURL} alt="article 1" />
      </div>
      <div className="gpt3__blog-container-article-content">
        <div className="article-content-top">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <div className="article-content-bottom">
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
