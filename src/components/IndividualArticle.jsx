import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIndividualArticle } from '../utils';
import ArticleCard from './ArticleCard';
import '../styleCss/IndividualArticle.css'
import '../styleCss/ArticleList.css';

export default function IndividualArticle() {
    const { article_id } = useParams();
    const [article, setIndividualArticle] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getIndividualArticle(article_id)
        .then(article => {
            setIndividualArticle(article);
            setIsLoading(false);
        })
        .catch(error => {
            setIsError(true);
            setIsLoading(false);
        }); 
    }, [article_id]);

    if (isError) {
        return <h2>Failed to load data.</h2>;
    }
  
    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
        <div className="article-container">
            <ArticleCard article={article} />
            
            </div>
            <div className="article-content">
                <p>{article.body}</p>
            </div>
      </>
    );
}

