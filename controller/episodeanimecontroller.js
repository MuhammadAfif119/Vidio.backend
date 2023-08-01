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
  
  const episodeanimecontroller = {
    async index(req, res) {
      try {
        const episodes = await episodeanime.findAll();
        return res.send(episodes);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async store(req, res) {
      try {
        const { series_id, judul, poster, film } = req.body;
        const newepisode = await episodeanime.create({
          series_id: series_id,
          judul: judul,
          poster: poster,
          film: film,
        });
        return res.send(newepisode);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async show(req, res) {
      try {
        const { id } = req.params;
        const finddescription = await episodeanime.findOne({
          where: {
            id: id,
          },
        });
        return res.send(finddescription);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async update(req, res) {
      try {
        const { series_id, judul, poster, film } = req.body;
        const { id } = req.params;
        console.log(req.body, "slsl");
        const updated = await episodeanime.update(
          {
            series_id: series_id,
          judul: judul,
          poster: poster,
          film: film,
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
        await episodeanime.destroy({
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
  
  module.exports = episodeanimecontroller;
  