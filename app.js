const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const readArticle = async (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data;
  } catch (error) {
    console.error('File error ', error);
  }
};

const generateHTML = async (articleContent) => {
  const prompt = `Process the following article using appropriate HTML tags for structuring the content. 
  Indicate places where it would be a good idea to add images, marked with the <img> tag with the attribute src="image_placeholder.jpg" and alt="".
   Also, add captions under the images.
  
article:
${articleContent}
  `;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0.7,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error communicating with OpenAI API: ', error);
  }
};

const saveHtmlToFile = async (htmlContent) => {
  fs.writeFileSync('artykul.html', htmlContent, 'utf-8');
};

const processArticle = async () => {
  const articleContent = await readArticle('artykul.txt');
  const htmlContent = await generateHTML(articleContent);
  saveHtmlToFile(htmlContent);
};

processArticle()
