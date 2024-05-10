import {useState,useEffect} from 'react'
import { getArticlesList } from '../utils'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom';
import '../styleCss/ArticleList.css'

export default function ArticlesList() {
    const [articlesList, setArticlesList] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      getArticlesList()
        .then(articles => {
          const shuffledArticles = shuffle(articles).slice(0, 3);
          setArticlesList(shuffledArticles);
          setIsLoading(false);
        })
        .catch(error => {
          setIsError(true);
          setIsLoading(false);
        });
    }, []);
  // shuffle array
  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    //remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // swap with current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
    if (isError) {
      return <h2>Failed to load data.</h2>;
    }
  
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <>
    <div className="topic-list">
      {}
    </div>
        <div className="article-list">
          {articlesList.map(article => (
            <Link key={article.article_id} to={`/articles/${article.article_id}`}>
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>
        </>
        );
  }