import React from 'react';
import React, { useState } from 'react';


function App() {
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleActionClick = () => {
    // Perform action logic here
  };

  const handleAnalyzeClick = () => {
    // Perform analyze logic here
  };

  return (
    <div>
      <h1>Website Title</h1>
      <input type="text" value={url} onChange={handleUrlChange} />
      <button onClick={handleActionClick}>Action</button>
      <button onClick={handleAnalyzeClick}>Analyze</button>
    </div>
  );
}

export default App;
