import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Fetch file readme.md dari folder public
    fetch('/readme.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error('Failed to load markdown:', err));
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Render markdown sebagai HTML */}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
