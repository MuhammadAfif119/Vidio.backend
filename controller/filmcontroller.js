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

const filmcontroller = {
  async index(req, res) {
    try {
      const films = await film.findAll();
      return res.send(films);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { genre_id, judul, poster, films } = req.body;
      const newfilm = await film.create({
        genre_id: genre_id,
        judul: judul,
        poster: poster,
        film: films,
      });
      return res.send(newfilm);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const findfilm = await film.findOne({
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
      SELECT * FROM films
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
      const { genre_id, judul, poster, films } = req.body;
      const { id } = req.params;
      console.log(req.body, "slsl");
      const updated = await film.update(
        {
          genre_id: genre_id,
          judul: judul,
          poster: poster,
          film: films,
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
      await film.destroy({
        where: {
          id: id,
        },
      });
      return res.send("terhapus");
    } catch (error) {
      return res.send(error.message);
    }
  },
  async drama(req, res) {
    try {
      const results = await film.findAll({
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
  async komedi(req, res) {
    try {
      const results = await film.findAll({
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
  async action(req, res) {
    try {
      const results = await film.findAll({
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
  async horror(req, res) {
    try {
      const results = await film.findAll({
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
      SELECT * FROM films
      LIMIT 10
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
};  

module.exports = filmcontroller;
