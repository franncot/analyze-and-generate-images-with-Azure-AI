// azure-image-analysis.js
async function analyzeImage(imageUrl) {
    const apiKey = '025d43b906744f60a99edfe2813b21f0'; // Replace with your Azure AI Vision API key
    const endpoint = 'https://franncovision.cognitiveservices.azure.com/'; // Replace with your Azure endpoint

    const url = `${endpoint}/vision/v4.0/analyze?visualFeatures=Categories,Description,Tags`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey,
        },
        body: JSON.stringify({ url: imageUrl }),
    });

    const data = await response.json();
    return data;
}

export default analyzeImage;

