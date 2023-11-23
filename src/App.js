import React, { useState } from 'react';


function App() {
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleGenerateClick = () => {
    // Perform action logic here
  };

  const handleAnalyzeClick = () => {
    // Perform analyze logic here
  };

  return (
    <div>
      <h1>Compu Hiper Mega Red</h1>
      <input type="text" value={url} onChange={handleUrlChange} />
      <br /> {/* Add a line break */}
      <button onClick={handleAnalyzeClick}>Analyze</button>
      <button onClick={handleGenerateClick}>Generate</button>
    </div>
  );
}

export default App;
