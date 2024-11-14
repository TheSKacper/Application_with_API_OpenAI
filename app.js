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
