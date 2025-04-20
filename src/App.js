import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [md, setMd] = useState('');

  useEffect(() => {
    fetch('/readme.md')
      .then(r => r.text())
      .then(setMd);
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <ReactMarkdown
        components={{
          img: ({node, ...props}) => (
            <img
              {...props}
              style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
            />
          )
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}

export default App;
