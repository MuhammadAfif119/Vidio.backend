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

const descriptioncontroller = {
  async index(req, res) {
    try {
      const description = await description.findAll();
      return res.send(description);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { film_id, description, country, rating, sutradara } = req.body;
      const newdescription = await description.create({
        film_id: film_id,
        description: description,
        country: country,
        rating: rating,
        sutradara: sutradara,
      });
      return res.send(newdescription);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const finddescription = await description.findOne({
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
      const { film_id, description, country, rating, sutradara } = req.body;
      const { id } = req.params;
      console.log(req.body, "slsl");
      const updated = await description.update(
        {
          film_id: film_id,
          description: description,
          country: country,
          rating: rating,
          sutradara: sutradara,
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
      await description.destroy({
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

module.exports = descriptioncontroller;
