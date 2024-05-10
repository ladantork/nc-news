import React from 'react';
import ArticlesList from "../components/articlesList"
import TopicList from '../components/TopicList';

export default function Home(){
    return(
        <>
         {/* <h1>Home</h1> */}
        <ArticlesList/>
        <TopicList/>
        </>
    )
}