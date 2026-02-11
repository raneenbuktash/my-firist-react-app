import React from 'react';

const TopicCard = ({ topic, onVote }) => {
  const fillLevel = Math.max(0, 100 - (topic.votes * 15));

  return (
    <div className="card-wrapper">
      <div className="card" onClick={() => onVote(topic.id)}>
        <div 
          className="overlay" 
          style={{ height: `${fillLevel}%`, backgroundColor: topic.color }}
        >
          {fillLevel > 20 && <p className="clue-text">{topic.clue}</p>}
        </div>
        <div className="card-content">
          <h2 className="topic-title">{topic.title}</h2>
        </div>
      </div>
      <div className="vote-number" style={{ borderTop: `4px solid ${topic.color}` }}>
        {topic.votes} صوت
      </div>
    </div>
  );
};

export default TopicCard;