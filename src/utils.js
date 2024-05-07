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

 export function getIndividualArticle(article_id) {
    return api
        .get(`articles/${article_id}`)
        .then(response => response.data)
        .catch((err) => {
            console.log(err.message);
            throw err;
        });
}

export function getCommentForIndividualArticle(article_id) {
    return api
        .get(`articles/${article_id}/comments`)
        .then(response => response.data.comments)
        .catch((err) => {
            console.log(err.message);
            throw err;
        });
}

export function updateArticleVote(article_id,inc_votes){
    return api
    .patch(`articles/${article_id}`,{inc_votes})
    .then(response => response.data)
    .catch((err) => {
        console.log(err.message);
        throw err;
    });
}