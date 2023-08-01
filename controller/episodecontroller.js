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
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
  
  const episodecontroller = {
    async index(req, res) {
      try {
        const episodes = await episode.findAll();
        return res.send(episodes);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async store(req, res) {
      try {
        const { series_id, judul, poster, film } = req.body;
        const newepisode = await episode.create({
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
        const finddescription = await episode.findOne({
          where: {
            id: id,
          },
        });
        return res.send(finddescription);
      } catch (error) {
        return res.send(error.message);
      }
    },

    
    async searchseries1(req, res) {
      try {
        const { series_id, judul } = req.params;
        const query = `SELECT episodes.id, episodes.poster, episodes.judul, episodes.film
        FROM episodes
        WHERE episodes.series_id = ${series_id} AND episodes.judul = '${judul}';
        `;
        const results = await sequelize.query(query, {
          type: QueryTypes.SELECT,
        });
    
        console.log(results);
        res.json(results);
      } catch (error) {
        console.error("Unable to fetch data:", error);
        res.status(500).json({ error: "Unable to fetch data" });
      }
    },

    async index1(req, res) {
      try {
        const { series_id } = req.params; 
        const episodes = await episode.findAll({
          where: {
            series_id: series_id,
          },
        });
    
        console.log(episodes);
    
        res.status(200).json(episodes);
      } catch (error) {
        console.error("Unable to fetch data:", error);
        res.status(500).json({ error: "Unable to fetch data" });
      }
    },
  
    async update(req, res) {
      try {
        const { series_id, judul, poster, film } = req.body;
        const { id } = req.params;
        console.log(req.body, "slsl");
        const updated = await episode.update(
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
        await episode.destroy({
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
  
  module.exports = episodecontroller;
  