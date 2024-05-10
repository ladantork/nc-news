import React, { useState, useEffect } from 'react';
import { getTopics } from '../utils'; // Importing getTopics function from utils file
import TopicCard from '../components/TopicCard'; // Importing TopicCard component
import { Link } from 'react-router-dom';

export default function TopicList(){
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = () => {
        getTopics()
            .then(topics => setTopics(topics))
            .catch(error => console.error(error));
    };

    return (
        <div className="topic-list">
            {topics.map(topic => (
                <Link key={topic.slug} to={`/topics/${topic.slug}`}>
                <TopicCard key={topic.slug} topic={topic} />
                </Link>
            ))}
        </div>
    );
};

