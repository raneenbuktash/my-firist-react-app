import { useState } from 'react'
import TopicCard from './TopicCard' // استدعاء المكون الجديد
import './index.css' // ربط التنسيق بملف index.css اللي عندك

function App() {
  const [topics, setTopics] = useState([
    { id: 1, title: "OOP & React Logic", clue: "موجود وبكل مكان وجذوري عميقة.. نسخة جوة نسخة والدنيا عندي أنيقة", color: '#3498db', votes: 0 },
    { id: 2, title: "LinkedIn Secrets", clue: "شكلي حلو وأمور ومش بحب التعقيد.. افهمني صح ومعايا هتكسب جمهور", color: '#2ecc71', votes: 0 },
    { id: 3, title: "UI/UX Magic", clue: "ظبطني ونمقني.. بيقولوا معايا السر خطير واللعب كبير", color: '#e67e22', votes: 0 }
  ]);

  const handleVote = (id) => {
    setTopics(topics.map(t => t.id === id ? { ...t, votes: t.votes + 1 } : t));
  };

  return (
    <div className="main-container">
      <header className="header">
        <h1>🎯 اختاروا موضوع الشرح</h1>
        <p>صوّتوا للكشف عن المحتوى المخفي!</p>
      </header>
      <div className="grid">
        {topics.map(topic => (
          <TopicCard key={topic.id} topic={topic} onVote={handleVote} />
        ))}
      </div>
    </div>
  );
}

export default App