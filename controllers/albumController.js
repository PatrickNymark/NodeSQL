// models
const { Album } = require('../config/database');

exports.getAllAlbums = (req, res) => {
  Album.findAll().then(albums => {
    if (!albums) {
      return res.status(500).json({ msg: 'No albums found' });
    }

    res.json(albums)
  })
}

exports.getAlbumById = (req, res) => {
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
};

exports.addNewAlbum = (req, res) => {
  const album = Object.assign(req.body);

  Album.create(album).then(album => res.json(album)).catch(err => res.status(500).json(err))
}