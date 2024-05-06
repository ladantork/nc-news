import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import IndividualArticle from './components/IndividualArticle';
import './App.css';

function App() {
 

  return (
    <>
        <Header />
       <Routes>
        <Route
          path = '/'
          element = { <Home /> }
        />

        <Route 
        path ='/articles/:article_id'
        element ={< IndividualArticle/>}
        />
         </Routes>
    </>
  )
}

export default App;
