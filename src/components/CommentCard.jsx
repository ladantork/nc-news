import React from 'react';
import '../styleCss/CommentCard.css'
export default function CommentCard({comment}){
    return(
        <div className="comment-card">
        <p>{comment.body}</p>
        <p>By: {comment.author}</p>
        <p>Published:{new Date(comment.created_at).toLocaleDateString()}</p>
        <p> Vote: {comment.votes}</p>
      </div>
    )
}