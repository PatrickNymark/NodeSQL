const express = require('express');
const router = express.Router();

// Controllers
const albumController = require('../controllers/albumController');

/**
 * GET all albums
 */
router.get('/', albumController.getAllAlbums);

/**
 * GET album by album id
 */
router.get('/find/:album_id', albumController.getAlbumById);

/**
 * ADD album
 */
router.post('/', albumController.addNewAlbum);

module.exports = router;