import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleGenerateClick = () => {
    // Perform generate logic here
  };

  const handleAnalyzeClick = async () => {
    setIsAnalyzing(true);
    const analysisResults = await analyzeImage(url);
    setResults(analysisResults);
    setIsAnalyzing(false);
  };

  const DisplayResults = () => {
    if (results) {
      return (
        <div>
          <h2>Analysis Results:</h2>
          <p>Processed Image URL: {url}</p>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Compu Hiper Mega Red</h1>
      <input type="text" value={url} onChange={handleUrlChange} />
      <br /> {/* Add a line break */}
      <br /> {/* Add a line break */}
      <button onClick={handleAnalyzeClick} disabled={isAnalyzing}>
        {isAnalyzing ? 'Analyzing...' : 'Analyze'}
      </button>
      &nbsp;&nbsp; {/* Add space between the buttons */}
      <button onClick={handleGenerateClick}>Generate</button>
      <br /> {/* Add a line break */}
      <DisplayResults />
    </div>
  );
}

export default App;