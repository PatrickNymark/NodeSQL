const express = require('express');
const router = express.Router();

// models
const { Album } = require('../config/database');

/**
 * GET all albums
 */
router.get('/', (req, res) => {
  Album.findAll().then(albums => {
    if (!albums) {
      return res.status(500).json({ msg: 'No albums found' });
    }

    res.json(albums)
  })
});

/**
 * GET album by artist id
 */
router.get('/query', (req, res) => {
  const { artist_id } = req.query;

  Album.findAll({
    include: [
      {
        model: Artist,
      }
    ]
  }).then(albums => {
    console.log(albums)
  })
})

/**
 * ADD album
 */
router.post('/', (req, res) => {
  const album = Object.assign(req.body);

  Album.create(album).then(album => res.json(album)).catch(err => res.status(500).json(err))
})

module.exports = router;