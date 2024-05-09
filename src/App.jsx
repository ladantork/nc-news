import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import IndividualArticle from './components/IndividualArticle';
import './App.css';
import Login from './components/Login'
import { useState } from 'react';


function App() {
  const [loggedInUserHeader, setLoggedInUserHeader] = useState(null);

  return (
    <Routes>
      <Route path="*" element={<>
        <Header user={loggedInUserHeader} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<IndividualArticle user={loggedInUserHeader}/>} />
          <Route path="/login" element={<Login setLoggedInUserHeader={setLoggedInUserHeader} />} />
        </Routes>
      </>} />
    </Routes>
  );
}


export default App;
