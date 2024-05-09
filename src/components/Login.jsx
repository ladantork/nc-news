import { useEffect, useState } from 'react';
import {getUser} from '../utils'
import LoginTextArea from '../components/LoginTextArea'
import NewComment from '../components/NewComment';


export default function Login({ setLoggedInUserHeader }) {
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
  
    useEffect(() => {
      getUser()
        .then(data => {
          setUsers(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          setIsError(true);
          setIsLoading(false);
        });
    }, []);
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    //   setIsUsernameValid(true);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = users.some(user => user.username === username);
      setIsUsernameValid(isValid);
      if (isValid) {
        setSubmitted(true);
        const user = users.find(user => user.username === username);
        setLoggedInUser(user);
        setLoggedInUserHeader(user); // Update the header with the logged-in user
      }
    };
  
    if (isError) {
      return <h2>Failed to load data.</h2>;
    }
  
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <div>
        <h2>Login</h2>
        <div className='login-container'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter username"
            />
            <button type="submit">Submit</button>
          </form>
          {!isUsernameValid && submitted && (<p>User not found</p>)}
          {isUsernameValid && submitted && loggedInUser && (
            <LoginTextArea user={loggedInUser} />
            
          )}
          <NewComment  user={loggedInUser} />
        </div>
      </div>
    );
  }

// export default function Login({ setLoggedInUserHeader}) {
    
//     const [users, setUsers] = useState([]);
//     const [isError, setIsError] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [username, setUsername] = useState('');
//     const [isUsernameValid, setIsUsernameValid] = useState(true);
//     const [submitted, setSubmitted] = useState(false);
//     const [loggedInUser, setLoggedInUser] = useState(null);
//     const [article_id, setArticleId] = useState(null); // Add article_id state
  
//     useEffect(() => {
//       getUser()
//         .then((data) => {
//           setUsers(data);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error('Error fetching users:', error);
//           setIsError(true);
//           setIsLoading(false);
//         });
//     }, []);
  
//     const handleUsernameChange = (e) => {
//       setUsername(e.target.value);
//       setIsUsernameValid(true);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const isValid = users.some((user) => user.username === username);
//       setIsUsernameValid(isValid);
//       if (isValid) {
//         setSubmitted(true);
//         const user = users.find((user) => user.username === username);
//         setLoggedInUser(user);
//         setLoggedInUserHeader(user); // Update the header with the logged-in user
//       }
//     };
  
//     if (isError) {
//       return <h2>Failed to load data.</h2>;
//     }
  
//     if (isLoading) {
//       return <h2>Loading...</h2>;
//     }
  
//     return (
//       <div>
//         <h2>Login</h2>
//         <div className="login-container">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={username}
//               onChange={handleUsernameChange}
//               placeholder="Enter username"
//             />
//             <button type="submit">Submit</button>
//           </form>
//           {!isUsernameValid && submitted && <p>User not found</p>}
//           {isUsernameValid && submitted && loggedInUser && (
//             <LoginTextArea user={loggedInUser} />
//           )}
        
//            <NewComment article_id={article_id} />
//         </div>
//       </div>
//     );
//   }
