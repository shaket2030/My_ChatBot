// const express = require('express');
// const { OpenAI } = require('openai');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const port = 3000;

// const openai = new OpenAI({
//     apiKey: 'sk-proj-cPhIbg3irW6BuTSMuHPQT3BlbkFJuiM7cYsjxP2LUK20hVpJ'
// });

// // Middleware to parse JSON body
// app.use(bodyParser.json());


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Endpoint to handle incoming messages from the frontend
// app.post('/message', async (req, res) => {
//     try {
//         const userInput = req.body.message;

//         // Call OpenAI API to generate bot response
//         const response = await openai.complete({
//             engine: 'text-davinci-002',
//             prompt: userInput,
//             maxTokens: 150
//         });

//         const botResponse = response.data.choices[0].text.trim();

//         // Send the bot response back to the frontend
//         res.json({ message: botResponse });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });






// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const { OpenAIApi, Configuration } = require('openai');

// const app = express();
// const port = 3000;

// // Your OpenAI API key
// const openaiApiKey = 'sk-proj-cPhIbg3irW6BuTSMuHPQT3BlbkFJuiM7cYsjxP2LUK20hVpJ';

// // OpenAI API configuration
// const configuration = new Configuration({
//   apiKey: openaiApiKey,
// });
// const openai = new OpenAIApi(configuration);

// // Middleware
// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Endpoint to handle user messages
// app.post('/message', async (req, res) => {
//   const userMessage = req.body.message;

//   try {
//     const response = await openai.createChatCompletion({
//       model: 'gpt-4',
//       messages: [{ role: 'user', content: userMessage }],
//     });

//     const botMessage = response.data.choices[0].message.content;
//     res.json({ message: botMessage });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'An error occurred while processing your request.' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// Load environment variables from .env file
// Load environment variables from .env file

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const path = require('path');

const app = express();
const port = 3000;

// Initialize the OpenAI API
const openai = new OpenAI({
  apiKey: 'sk-proj-gA33yOx809nHeNfMkjhXT3BlbkFJFpIBI45lMhDNkTwRDIer',
  organization: 'org-1tUNdCnoNkj7eWk7aYjiB7k6',
  project: 'proj_3Bc64OmDNeq6FcfQX768bk1J',
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Endpoint to handle user messages
app.post('/message', async (req, res) => {
  const userMessage = req.body.message;
  console.log(userMessage);

  try {
    // Make a request to OpenAI API
    console.log("hello");
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    // Send the bot's response
    const botMessage = response.choices[0].message.content;
    res.json({ message: botMessage });
  } catch (error) {
    console.log("hello1");
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// org-xvaBz3Igr8aX52Goqu706IiM
// proj_hpukfAwYxVozQLDQed64xef5