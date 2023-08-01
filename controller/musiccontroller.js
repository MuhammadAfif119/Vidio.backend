const {
    anime,
  description,
  descriptionanime,
  descriptionfavorit,
  descriptionseries,
  enterteinment,
  episode,
  episodeanime,
  favorit,
  film,
  genre,
  genreanime,
  genremusic,
  genreseries,
  jenis,
  jenisenterteinment,
  music,
  news,
  series,
  } = require("../models");
  
  const musiccontroller = {
    async index(req, res) {
      try {
        const musics = await music.findAll();
        return res.send(musics);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async store(req, res) {
      try {
        const { genre_id, judul, poster, description } = req.body;
        const newfilm = await music.create({
          genre_id: genre_id,
          judul: judul,
          poster: poster,
          description: description,
        });
        return res.send(newfilm);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async show(req, res) {
      try {
        const { id } = req.params;
        const findfilm = await music.findOne({
          where: {
            id: id,
          },
        });
        return res.send(findfilm);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async update(req, res) {
      try {
        const { genre_id, judul, poster, description } = req.body;
        const { id } = req.params;
        console.log(req.body, "slsl");
        const updated = await music.update(
          {
            genre_id: genre_id,
            judul: judul,
            poster: poster,
            description: description,
          },
          {
            where: {
              id: id,
            },
          }
        );
        return res.send("selesai");
      } catch (error) {
        return res.send(error.message);
      }
    },
    async destroy(req, res) {
      try {
        const { id } = req.params;
        await music.destroy({
          where: {
            id: id,
          },
        });
        return res.send("terhapus");
      } catch (error) {
        return res.send(error.message);
      }
    },
  };
  
  module.exports = musiccontroller;
  