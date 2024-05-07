import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getCommentForIndividualArticle  } from '../utils';
import CommentCard from './CommentCard';

export default function CommentsAssociatedWithArticle() {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);

    getCommentForIndividualArticle(article_id)
            .then(comments => {
                setComments(comments);
                setIsLoading(false);
            })
            .catch(error => {
                setIsError(true);
                setIsLoading(false);
            })     
}, [article_id])

if (isError) {
    return <h2>Failed to load data.</h2>;
}

if (isLoading) {
    return <h2>Loading...</h2>;
}

return (
    <>


                <h3>Comments</h3>
                <div className='comment-container'>
                    {comments.map(comment => (
                        <CommentCard key={comment.comment_id} comment={comment} />
                 
                    ))}
                    </div>
                    
             
    </>
)


}