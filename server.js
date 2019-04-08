const express = require('express');

const app = express();

// routes
const albums = require('./routes/albums');

// parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/albums', albums);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`))