const express = require('express');
const router = express.Router();

// models
const { Song } = require('../config/database');

router.get('/', (req, res) => {
  Song.findAll().then(songs => {
    if (!songs) {
      return res.status(400).json({ msg: 'No songs found' })
    }

    res.json(songs)
  })
})

router.post('/', (req, res) => {
  const song = Object.assign(req.body);

  Song.create(song).then(song => res.json(song)).catch(err => res.status(500).json(err))
})


module.exports = router;