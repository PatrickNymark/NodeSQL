const express = require('express');
const router = express.Router();

// models
const { Artist } = require('../config/database');

/**
 * GET all artists
 */
router.get('/', (req, res) => {
  Artist.findAll().then(artists => {
    if (!artists) {
      return res.status(404).json({ msg: 'No artists found' })
    }

    res.json(artists);
  }).catch(err => res.status(500).json(err))
})

/**
 * POST add artist
 */
router.post('/', (req, res) => {
  const artist = Object.assign(req.body);

  Artist.create(artist).then(artist => res.json(artist)).catch(err => res.status(500).json(err))
});

/**
 * GET artist by id
 */
router.get('/find/:artist_id', (req, res) => {
  const { artist_id } = req.params;

  Artist.findAll({
    where: {
      artist_id: artist_id
    }
  }).then(artist => {
    if (!artist) {
      return res.status(404).json({ msg: 'Artist not found' })
    }

    res.json(artist)
  }).catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router;