const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const fs = require('fs').promises;

const readArticle = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return data;
  } catch (error) {
    console.error('File error:', error);
    throw error;
  }
};

const generateHTML = async (articleContent) => {
  const messages = [
    {
      role: 'system',
      content:
        'You are a helpful assistant that generates HTML content for articles with image suggestions.',
    },
    {
      role: 'user',
      content: `Process the following article using appropriate HTML tags for structuring the content. 
        Indicate places where it would be a good idea to add images, marked with the <img> tag with the attribute src="image_placeholder.jpg".
        Add the alt attribute with a description of the image that can serve as a prompt for generating the image.
        Include captions below each image using the appropriate HTML tag. The output should only include HTML code for the <body> content, without <html>, <head>, or <body> tags.
        
article:
${articleContent}`,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 1500,
      temperature: 0.7,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error);
    throw error;
  }
};

const saveHtmlToFile = async (htmlContent) => {
  try {
    await fs.writeFile('artykul.html', htmlContent, 'utf-8');
    console.log('The HTML file was saved as artykul.html');
  } catch (error) {
    console.error('Error writing to file:', error);
    throw error;
  }
};

const processArticle = async () => {
  try {
    const articleContent = await readArticle('artykul.txt');
    const htmlContent = await generateHTML(articleContent);
    await saveHtmlToFile(htmlContent);
  } catch (error) {
    console.error('An error occurred while processing the article:', error);
  }
};

processArticle();
