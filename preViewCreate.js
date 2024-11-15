const fs = require('fs').promises;

const createPreview = async () => {
  try {
    const template = await fs.readFile('szablon.html', 'utf-8');
    const articleContent = await fs.readFile('artykul.html', 'utf-8');
    const previewContent = template.replace(
      '</body>',
      `${articleContent}</body>`
    );
    await fs.writeFile('podglad.html', previewContent, 'utf-8');
    console.log('The preview file was saved as podglad.html');
  } catch (error) {
    console.error('Error creating preview:', error);
  }
};

createPreview();
