const express = require('express');

const app = express();

// routes
const albums = require('./routes/albums');
const artists = require('./routes/artists');
const songs = require('./routes/songs');


// parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/albums', albums);
app.use('/artists', artists);
app.use('/songs', songs);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`))