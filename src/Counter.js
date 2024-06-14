import React, { useState } from 'react';

const Counter = () => {
  const [content, setContent] = useState('');

  const fetchHtmlContent = () => {
    fetch('https://react-orpin-ten.vercel.app/')
      .then(response => response.text())
      .then(htmlContent => {
        setContent(htmlContent);
      })
      .catch(error => console.error('Error fetching HTML:', error));
  };

  return (
    <div>
      <button onClick={fetchHtmlContent} style={buttonStyle}>
        Fetch HTML Content
      </button>
      <div id="target-element" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 20px',
  borderRadius: '50%',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default Counter;
