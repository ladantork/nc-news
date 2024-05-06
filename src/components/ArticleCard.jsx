import React from 'react';
import '../styleCss/ArticleCard.css';



const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-box">
        <div className="article-img">
          <img src={article.article_img_url} alt={article.title} />
        </div>
        <div className="article-content">
          <h3 className="article-title">{article.title}</h3>
          <p className="article-info">
            <span>Author: {article.author}</span>
            <span>Published: {new Date(article.created_at).toLocaleDateString()}</span>
          
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;


