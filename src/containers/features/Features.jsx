import React from 'react';
import './features.css';
import { Feature } from '../../components';

function Features() {
  return (
    <div className="features section-padding" id="features">
      <div className="features-heading">
        <h1 className="gradient-text"><b>The Future is Now.</b><br />Step into the Future & Make Great Things Happen.</h1>
        <span>Request Early Access to Get Started</span>
      </div>
      <div className="features-list">
        <Feature title="Contextual Awareness" text="PurifAI's GPTs are also known for their contextual awareness, meaning they can understand the context of a conversation or task and generate responses accordingly. This allows GPTs to be used in a wide range of applications, from automated text summarization in news aggregation platforms to 24/7 virtual therapists." />
        <Feature title="Continual Learning and Improvement" text="One of the key advantages of PurifAI's GPTs is their ability to continually learn and improve. As they are constantly being trained on new data, they can adapt to changes in language use and can improve their responses over time." />
        <Feature title="Multilingual Capabilities" text="Our GPTs can be trained on multiple languages, making them versatile tools for language translation and cross-lingual tasks. Their knowledgebase also allows them to understand and generate responses in a more nuanced and culturally appropriate manner." />
        <Feature title="Scalability, Redefined" text="Our services are highly scalable, meaning they can handle large amounts of data and tasks without compromising performance. This makes us valuable for anyone, whether individual or business, looking for efficient and effective ways to handle complex tasks and processes." />
      </div>
    </div>
  )
}

export default Features