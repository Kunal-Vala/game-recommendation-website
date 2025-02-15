const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games?key=8a766c74a3a44be79caba958b77a3ccc');
    const games = response.data.results;

    res.render('index', { games });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching games data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
