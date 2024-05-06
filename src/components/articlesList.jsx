import {useState,useEffect} from 'react'
import { getArticlesList } from '../utils'
import ArticleCard from '../components/ArticleCard.'
import '../styleCss/ArticleList.css'

export default function ArticlesList() {
    const [articlesList, setArticlesList] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      getArticlesList()
        .then(articles => {
          setArticlesList(articles.slice(0,3));
          setIsLoading(false);
        })
        .catch(error => {
          setIsError(true);
          setIsLoading(false);
        });
    }, []);
  
    if (isError) {
      return <h2>Failed to load data.</h2>;
    }
  
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    

    return (
        <>
          {articlesList.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </>
      );
  }
  