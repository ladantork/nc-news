import axios from 'axios';

const api = axios.create({
  baseURL: 'https://news-api-solo.onrender.com/api'
 });

 export function getArticlesList(){

    return api
    .get('articles')
    .then(response => response.data.articles)
    .catch((err) => { console.log(err.message) 
    throw err
});

 }