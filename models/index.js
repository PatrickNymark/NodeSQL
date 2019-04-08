const Sequelize = require('sequelize');
const keys = require('../config/keys');

// models
const ArtistModel = require('./artist');
const SongModel = require('./song');
const AlbumModel = require('./album');

const sequelize = new Sequelize(keys.database, keys.username, keys.password, {
  host: keys.host,
  dialect: keys.dialect,
  define: {
    timestamps: false
  }
})

// Create tables if not exists
sequelize.sync();

const Artist = ArtistModel(sequelize, Sequelize);
const Song = SongModel(sequelize, Sequelize);
const Album = AlbumModel(sequelize, Sequelize);

module.exports = {
  Artist,
  Song,
  Album
}