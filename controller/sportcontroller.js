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
  sport,
  series,
  category,
  } = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
  
  const sportcontroller = {
    async index(req, res) {
        try {
          const sports = await sport.findAll();
          return res.send(sports);
        } catch (error) {
          return res.send(error.message);
        }
      },
  
    async store(req, res) {
      try {
        const { jenis_id, judul, poster, description } = req.body;
        const newfilm = await sport.create({
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
        const findsport = await sport.findOne({
          where: {
            id: id,
          },
        });
        return res.send(findsport);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async update(req, res) {
      try {
        const { jenis_id, judul, poster, description } = req.body;
        const { id } = req.params;
        console.log(req.body, "slsl");
        const updated = await sport.update(
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
        await sport.destroy({
          where: {
            id: id,
          },
        });
        return res.send("terhapus");
      } catch (error) {
        return res.send(error.message);
      }
    },
    async footbal(req, res) {
      try {
        const results = await sport.findAll({
          where: {
            jenis_id: 1
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
    async volley(req, res) {
      try {
        const results = await sport.findAll({
          where: {
            jenis_id: 2
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
    async mpl(req, res) {
      try {
        const results = await sport.findAll({
          where: {
            jenis_id: 3
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
    async liga1(req, res) {
      try {
        const results = await sport.findAll({
          where: {
            jenis_id: 4
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
        SELECT * FROM sports
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
  
  module.exports = sportcontroller;
  