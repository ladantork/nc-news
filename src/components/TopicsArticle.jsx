// TopicArticles.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesList } from '../utils';
import ArticleCard from './ArticleCard';

export default function TopicArticles() {
    const { slug } = useParams();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticlesList()
            .then(articles => {
                const filteredArticles = articles.filter(article => article.topic === slug);
                setArticles(filteredArticles);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setIsLoading(false);
            });
    }, [slug]);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="topic-articles">
            <h2>Articles for topic: {slug}</h2>
            <div className="article-list">
                {articles.map(article => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </div>
        </div>
    );
}
