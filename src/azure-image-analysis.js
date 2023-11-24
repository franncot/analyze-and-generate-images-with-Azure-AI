// azure-image-analysis.js
async function analyzeImage(imageUrl) {
    const apiKey = ''; // Replace with your Azure AI Vision API key
    const endpoint = 'https://franncovision.cognitiveservices.azure.com/'; // Replace with your Azure endpoint

    const url = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=objects`;

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

