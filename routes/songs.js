const express = require('express');
const router = express.Router();

// models
const { Song } = require('../config/database');

/**
 * GET all songs
 */
router.get('/', (req, res) => {
  Song.findAll().then(songs => {
    if (!songs) {
      return res.status(400).json({ msg: 'No songs found' })
    }

    res.json(songs)
  })
})

/**
 * POST add song
 */
router.post('/', (req, res) => {
  const song = Object.assign(req.body);

  Song.create(song).then(song => res.json(song)).catch(err => res.status(500).json(err))
})

/**
 * GET song by id
 */
router.get('/find/:song_id', (req, res) => {
  const { song_id } = req.params;

  Song.findAll({
    where: {
      song_id: song_id
    }
  }).then(song => {
    if (!song) {
      return res.status(404).json({ msg: 'Song not found' })
    }

    res.json(song)
  }).catch(err => res.status(500).json(err))
})

module.exports = router;