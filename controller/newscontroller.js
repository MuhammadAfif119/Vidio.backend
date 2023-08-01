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
  sport,
  news,
  series,
  } = require("../models");
  
  const newscontroller = {
    async index(req, res) {
      try {
        const newss = await news.findAll();
        return res.send(newss);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async store(req, res) {
      try {
        const { jenis_id, judul, poster, description } = req.body;
        const newfilm = await news.create({
          jenis_id: jenis_id,
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
        const findnews = await news.findOne({
          where: {
            id: id,
          },
        });
        return res.send(findnews);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async update(req, res) {
      try {
        const { jenis_id, judul, poster, description } = req.body;
        const { id } = req.params;
        console.log(req.body, "slsl");
        const updated = await news.update(
          {
            jenis_id: jenis_id,
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
        await news.destroy({
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
  
  module.exports = newscontroller;
  