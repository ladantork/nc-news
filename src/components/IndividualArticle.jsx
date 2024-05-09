import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIndividualArticle} from '../utils';
import CommentsAssociatedWithArticle from '../components/Comment.jsx'
import VoteArticle from '../components/Vote.jsx'
import ArticleCard from './ArticleCard';
import '../styleCss/IndividualArticle.css'
import '../styleCss/ArticleList.css';
import NewComment from '../components/NewComment.jsx';


export default function IndividualArticle({user}) {

    const { article_id } = useParams();
  
    const [article, setArticle] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      setIsError(false);
  
      getIndividualArticle(article_id)
        .then((article) => {
          setArticle(article);
          setIsLoading(false);
        })
        .catch((error) => {
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
    const handleSubmitComment = (text) => {
        // Handle the submission of the comment
        console.log('Article ID:', article_id);
        console.log('Comment Text:', text);
      };
  
    return (
      <>
        <div>
          <div className="article-container">
            <ArticleCard article={article} />
          </div>
          <div className="article-content">
            <p>{article.body}</p>
            <VoteArticle article={article} setArticle={setArticle} />
          </div>
          <CommentsAssociatedWithArticle />
          <div>
          <NewComment article_id={article_id} user={user} />
          </div>
        </div>
      </>
    );
  }          

//  article_id={article_id} username={users.username} onSubmit={handleSubmitComment}