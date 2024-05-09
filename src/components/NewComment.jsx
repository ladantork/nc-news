
import {useState,useEffect} from 'react';
import { postNewComment } from '../utils';

export default function NewComment({ article_id, user }) {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!user) {
        alert('You need to login to leave a comment');
        return;
      }
      if (article_id && text.trim() !== '') {
        postNewComment(article_id, user.username, text)
          .then((comment) => {
            console.log('Comment posted:', comment);
          })
          .catch((error) => {
            console.error('Failed to post comment:', error);
          });
      }
      setText('');
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your comment here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }



