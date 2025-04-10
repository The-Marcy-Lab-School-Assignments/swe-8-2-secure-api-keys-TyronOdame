//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const baseUrl = 'https://api.giphy.com/v1/gifs';

const serveGifs = async (req, res) => {
  const trendingUrl = `${baseUrl}/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`;

  try {
    const response = await fetch(trendingUrl);
    const gifData = await response.json();
    res.send(gifData);
  } catch (error) {
    console.error('Error while fetching:', error);
    res.status(503).send(error);
  }
};

const serveStatic = express.static(pathToDistFolder);

app.get('/api/gifs', serveGifs);

app.use(serveStatic);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
