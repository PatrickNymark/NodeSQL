const express = require('express');

const app = express();

// models
const { Artist, Song } = require('./models/index');

app.get('/', (req, res) => {
  Artist.findAll().then(artists => {
    res.json(artists)
  })
});

app.get('/song', (req, res) => {
  Song.findAll().then(songs => {
    res.json(songs)
  })
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`))