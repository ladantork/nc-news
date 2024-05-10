import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getCommentForIndividualArticle, deleteComment} from '../utils';
import CommentCard from './CommentCard';

export default function CommentsAssociatedWithArticle({user}) {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteSuccess, setDeleteSuccess] = useState(false); 


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
const handleDeleteComment =(comment_id) => {
    console.log('Comment ID:', comment_id);
    deleteComment({comment_id})
    .then(() => {
        setComments(prevComments => prevComments.filter(comment => comment.comment_id !== comment_id));
        setDeleteSuccess(true);
    })
    .catch(error =>{
        console.error('Failed to delete comment:', error);
    })
};

if (isError) {
    return <h2>Failed to load data.</h2>;
}

if (isLoading) {
    return <h2>Loading...</h2>;
}

return (
    <>

     <h3>Comments</h3>
     {deleteSuccess ? <p>Comment successfully deleted</p> : null}

         <div className='comment-container'>
            {comments.map(comment => (
             <CommentCard key={comment.comment_id} comment={comment} user={user} onDelete={handleDeleteComment}/>
                 
            ))}
            </div>         
    </>
)
}
// export default function CommentsAssociatedWithArticle({ article_id, user }) {
//     const [comments, setComments] = useState([]);
//     const [isError, setIsError] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         setIsLoading(true);

//         getCommentForIndividualArticle(article_id)
//             .then(comments => {
//                 setComments(comments);
//                 setIsLoading(false);
//             })
//             .catch(error => {
//                 setIsError(true);
//                 setIsLoading(false);
//             });
//     }, [article_id]);

//     const handleDeleteComment = async (commentId) => {
//         try {
//             await deleteComment(commentId);
//             setComments(prevComments => prevComments.filter(comment => comment.comment_id !== commentId));
//         } catch (error) {
//             console.error('Failed to delete comment:', error);
//         }
//     };

//     if (isError) {
//         return <h2>Failed to load data.</h2>;
//     }

//     if (isLoading) {
//         return <h2>Loading...</h2>;
//     }

//     return (
//         <>
//             <h3>Comments</h3>
//             <div className='comment-container'>
//                 {comments.map(comment => (
//                     <CommentCard key={comment.comment_id} comment={comment} user={user} onDelete={handleDeleteComment} />
//                 ))}
//             </div>
//         </>
//     )
// }