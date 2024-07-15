require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const path = require('path');

const app = express();
const port = 3000;


const openai = new OpenAI({
  apiKey: 'sk-proj-gA33yOx809nHeNfMkjhXT3BlbkFJFpIBI45lMhDNkTwRDIer',
  organization: 'org-1tUNdCnoNkj7eWk7aYjiB7k6',
  project: 'proj_3Bc64OmDNeq6FcfQX768bk1J',
});


app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.post('/message', async (req, res) => {
  const userMessage = req.body.message;
  console.log(userMessage);

  try {
    
    console.log("hello");
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    
    const botMessage = response.choices[0].message.content;
    res.json({ message: botMessage });
  } catch (error) {
    console.log("hello1");
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// org-xvaBz3Igr8aX52Goqu706IiM
// proj_hpukfAwYxVozQLDQed64xef5
