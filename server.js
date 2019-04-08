const express = require('express');

const app = express();

// models
const { Artist } = require('./config/sequelize');

app.get('/', (req, res) => {
  Artist.findAll().then(artists => {
    res.json(artists)
  })
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`))