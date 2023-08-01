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

const animecontroller = {
  async index(req, res) {
    try {
      const animes = await anime.findAll();
      return res.send(animes);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { genre_id, judul, poster, description } = req.body;
      const newfilm = await anime.create({
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
      const findfilm = await anime.findOne({
        where: {
          id: id,
        },
      });
      return res.send(findfilm);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show1(req, res) {
    try {
      const query = `
      SELECT * FROM animes
      WHERE id = ${desc}
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


  async update(req, res) {
    try {
      const { genre_id, judul, poster, description } = req.body;
      const { id } = req.params;
      console.log(req.body, "slsl");
      const updated = await anime.update(
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
      await anime.destroy({
        where: {
          id: id,
        },
      });
      return res.send("terhapus");
    } catch (error) {
      return res.send(error.message);
    }
  },
  async adventure(req, res) {
    try {
      const results = await anime.findAll({
        where: {
          genre_id: 1
        }
      });
  
      console.log(results);
      res.json(results);
      return results;
    } catch (error) {
      console.error("Unable to fetch data:", error);
      throw error;
    }
  },
  async demon(req, res) {
    try {
      const results = await anime.findAll({
        where: {
          genre_id: 2
        }
      });
  
      console.log(results);
      res.json(results);
      return results;
    } catch (error) {
      console.error("Unable to fetch data:", error);
      throw error;
    }
  },
  async Sword(req, res) {
    try {
      const results = await anime.findAll({
        where: {
          genre_id: 3
        }
      });
  
      console.log(results);
      res.json(results);
      return results;
    } catch (error) {
      console.error("Unable to fetch data:", error);
      throw error;
    }
  },
  async Shounen(req, res) {
    try {
      const results = await anime.findAll({
        where: {
          genre_id: 4
        }
      });
  
      console.log(results);
      res.json(results);
  
      return results;
    } catch (error) {
      console.error("Unable to fetch data:", error);
      throw error;
    }
  },
  async fav(req, res) {
    try {
      const query = `
      SELECT * FROM animes
      LIMIT 8
      `;

      const results = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      console.log(results);

      res.status(200).json(results);
    } catch (error) {
      console.error("Unable to fetch data:", error);
      res.status(500).json({ error: "Unable to fetch data" });
    }
  },
};

module.exports = animecontroller;
