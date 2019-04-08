module.exports = (sequelize, type) => {
  const album = sequelize.define('album', {
    album_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    album_name: {
      type: type.STRING,
      allowNull: false
    },
    artist_id: {
      type: type.INTEGER,
      references: {
        model: 'artists',
        key: 'artist_id'
      }
    }
  })


  return album;
}