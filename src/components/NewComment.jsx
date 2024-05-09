
import {useState,useEffect} from 'react';
import { postNewComment } from '../utils';
import { getUser } from '../utils';


// export default function NewComment({ article_id,onSubmit }) {
//     console.log(onSubmit)
//     console.log(article_id)
  
//   const [text, setText] = useState('');
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     getUser()
//       .then((user) => {
//         setUsername(user.username);
//         console.log(user.username)
       
//       })
//       .catch((error) => {
//         console.error('Failed to fetch user:', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(text); // Call the onSubmit function passed from the parent component
//     setText('');
//   };

//   useEffect(() => {
//     if (article_id && text.trim() !== '') {
//       postNewComment(article_id, username, text)
//         .then((comment) => {
//           console.log('Comment posted:', comment);
//         })
//         .catch((error) => {
//           console.error('Failed to post comment:', error);
//         });
//     }
//   }, [article_id, text, username]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           placeholder="Write your comment here..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
export default function NewComment({ article_id,user}) {
    console.log(article_id)
    const [text, setText] = useState('');
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      getUser()
        .then((user) => {
          setUsername(user.username);
        })
        .catch((error) => {
          console.error('Failed to fetch user:', error);
        });
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
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




