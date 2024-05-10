import React from 'react';
import '../styleCss/CommentCard.css'
import{ useState } from 'react';

export default function CommentCard({ comment, user, onDelete}) {
  const isAuthor = user && user.username === comment.author;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
      if (!isDeleting && onDelete) { // Check if onDelete is defined
          setIsDeleting(true);
          onDelete(comment.comment_id)
              .then(() => {
                  console.log('Comment successfully deleted');
                 
              })
              .catch(error => {
                  console.error('Failed to delete comment:', error);
              })
              .finally(() => {
                  setIsDeleting(false);
              });
      }
  };

  return (
      <div className="comment-card">
          <p>{comment.body}</p>
          <p>By: {comment.author}</p>
          <p>Published: {new Date(comment.created_at).toLocaleDateString()}</p>
          <p>Vote: {comment.votes}</p>
          {isAuthor && (
              <button onClick={handleDelete} disabled={isDeleting}>
                  {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
          )}
      </div>
  );
}
