
async function generateImage() {
  const apiKey = ''; // Replace with your OpenAI API key
  const model = 'walle-2';
  
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      prompt: 'Generate an image'
    })
  });

  const data = await response.json();
  console.log(data);
  // Handle the generated image data here
}

export default generateImage;
