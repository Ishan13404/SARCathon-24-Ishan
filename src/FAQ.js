import React, { useState } from 'react';
import faqData from './faqData';
import './FAQ.css';

const FAQ = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const allFaqs = Object.values(faqData).flat();
    const searchResults = allFaqs.filter(faq => 
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase())
    );
    setResults(searchResults);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1 className="hackathon-heading">SARCathon '24 Hackathon</h1>
        <h2>SARAS AI Institute FAQ</h2>
        <div className="personal-info">
          <p>Made by: Ishan Grover</p>
          <p>Roll No.- 22B1528</p>
          <p>College Name: Indian Institute of Technology Bombay</p>
        </div>
      </header>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your question..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results-container">
        {results.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;