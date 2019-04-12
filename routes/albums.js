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
 * GET album by album id
 */
router.get('/find/:album_id', (req, res) => {
  const { album_id } = req.params;

  Album.findAll({
    where: {
      album_id: album_id
    }
  }).then(album => {
    if (!album) {
      return res.status(404).json({ msg: 'Album not foundd' })
    }

    res.json(album);
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