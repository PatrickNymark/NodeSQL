const express = require('express');
const router = express.Router();

// models
const { Artist } = require('../config/database');

/**
 * GET find all artists
 */
router.get('/', (req, res) => {
  Artist.findAll().then(artists => {
    if (!artists) {
      return res.status(404).json({ msg: 'No artists found' })
    }

    res.json(artists);
  })
})

/**
 * POST add artist
 */
router.post('/', (req, res) => {
  const artist = Object.assign(req.body);

  Artist.create(artist).then(artist => res.json(artist)).catch(err => res.status(500).json(err))
})

module.exports = router;