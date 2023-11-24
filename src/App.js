import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation'; // Import the generateImage module

function App() {
    const [url, setUrl] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false); // Add a new state for image generation
    const [results, setResults] = useState(null);

    const handleUrlChange = (event) => {
      setUrl(event.target.value);
    };

    const handleGenerateClick = async () => {
      setIsGenerating(true); // Set the isGenerating state to true
      await generateImage(); // Call the generateImage function
      setIsGenerating(false); // Set the isGenerating state back to false
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
            <p>Generated Image URL: {results.generatedImageUrl}</p> {/* Display the URL of the generated image */}
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
        <button onClick={handleGenerateClick} disabled={isGenerating}>
          {isGenerating ? 'Generating...' : 'Generate'} {/* Update the button text based on the isGenerating state */}
        </button>
        <br /> {/* Add a line break */}
        <DisplayResults />
      </div>
    );
  }

  export default App;
