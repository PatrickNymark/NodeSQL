module.exports = (sequalize, type) => {
  const song = sequalize.define('song', {
    song_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    song_name: {
      type: type.STRING,
      allowNull: false
    },
    song_text: {
      type: type.STRING
    },
    artist_id: {
      type: type.INTEGER,
      references: {
        model: 'artists',
        key: 'artist_id'
      }
    },
    album_id: {
      type: type.INTEGER,
      references: {
        model: 'albums',
        key: 'album_id'
      }
    },
    number_of_plays: {
      type: type.INTEGER,
      defaultValue: 0
    }
  });

  return song;
}