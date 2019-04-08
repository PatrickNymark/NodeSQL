const Sequelize = require('sequelize');
const keys = require('./keys');

// models
const ArtistModel = require('../models/artist');

const sequelize = new Sequelize(keys.database, keys.username, keys.password, {
  host: keys.host,
  dialect: keys.dialect,
  define: {
    timestamps: false
  }
})

const Artist = ArtistModel(sequelize, Sequelize);

module.exports = {
  Artist
}