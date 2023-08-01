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
  
  const favoritcontroller = {
    async index(req, res) {
      try {
        const favorit = await favorit.findAll();
        return res.send(favorit);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async store(req, res) {
      try {
        const { genre_id, judul, poster, film } = req.body;
        const newfilm = await favorit.create({
          genre_id: genre_id,
          judul: judul,
          poster: poster,
          film: film,
        });
        return res.send(newfilm);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async show(req, res) {
      try {
        const { id } = req.params;
        const findfilm = await favorit.findOne({
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
        const { genre_id, judul, poster, film } = req.body;
        const { id } = req.params;
        console.log(req.body, "slsl");
        const updated = await favorit.update(
          {
            genre_id: genre_id,
            judul: judul,
            poster: poster,
            favorit: film,
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
        await favorit.destroy({
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
  
  module.exports = favoritcontroller;
  