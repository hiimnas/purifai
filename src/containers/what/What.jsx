import React from 'react';
import './what.css';
import { Feature } from '../../components';

function What() {
  return (
    <div className="what section-margin gradient-bg" id="what">
      <div className="featured">
        <Feature title="What is a GPT?" text="GPT (Generative Pre-trained Transformer) is an open-source artificial intelligence (AI) platform that has gained attention for its ability to generate human-like responses and complete various tasks. GPT is based on a neural network architecture called Transformer and uses unsupervised learning, meaning it can learn from large amounts of data without being explicitly programmed. This allows it to adapt to different languages and tasks, making it a versatile tool for natural language processing (NLP) applications." />
      </div>
      <div className="heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <a href="#">Explore the library ≫</a>
      </div>
      <div className="features-container">
        <Feature title="Chatbots" text="One of the most well-known applications of GPTs. By training on large amounts of data from social media, news articles, and books, GPT can generate human-like responses to user queries, creating the illusion of a conversation." />
        <Feature title="Knowledgebase" text="GPT can also be used to create and maintain a knowledgebase of information. By training on an enormous amount of data from various sources like Wikipedia, GPT can generate detailed, well-informed responses to user questions." />
        <Feature title="Education" text="GPT can be used for educational purposes, such as in AI-powered personal tutors. GPT can provide analysis, insights and personalized feedback, making the learning process engaging and effective." />
      </div>
    </div>
  )
}

export default What