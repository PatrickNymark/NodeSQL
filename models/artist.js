module.exports = (sequelize, type) => {
  const artist = sequelize.define('artist', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: type.STRING,
    last_name: type.STRING,
    artist_name: {
      type: type.STRING,
      allowNull: false
    }
  })

  return artist;
} 