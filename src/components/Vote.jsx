import React, {useState } from 'react';
import{updateArticleVote} from '../utils'

export default function VoteArticle({article, setArticle}) {
  const [voteChange, setVoteChange] = useState(0);

  function handleVote(incVote) {
    setArticle(article => ({ ...article, votes: article.votes + incVote }));
    updateArticleVote(article.article_id, incVote)
    // setVoteChange(currVoteChange => currVoteChange + incVote)
    .then(() => setVoteChange(currVoteChange => currVoteChange + incVote))
    .catch(error => console.error('Failed to update vote:', error));
  }

  function downVote() {
    handleVote(-1);
  }

  function upVote() {
    handleVote(1);
  }

  return (
    <div className = "article-votes">
     <button disabled = {voteChange === 1} onClick={upVote}> + </button>
      <p>{article.votes}</p>
      <button disabled = {voteChange === -1} onClick={downVote}> - </button>
    </div>
  );
}