import React from 'react';

const TopicCard = ({ topic }) => {
    return (
        <>
        <div className="topic-card">
        <h3 className="topic-slug">{topic.slug}</h3>
        <p>{topic.description}</p>

        </div>
        
        </>
    )
        
    }
    
    export default TopicCard;