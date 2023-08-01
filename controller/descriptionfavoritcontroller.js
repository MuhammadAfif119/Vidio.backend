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
  
  const descriptionfavoritcontroller = {
    async index(req, res) {
      try {
        const descriptionfavorit = await descriptionfavorit.findAll();
        return res.send(descriptionfavorit);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async store(req, res) {
      try {
        const { film_id, description, country, rating, sutradara } = req.body;
        const newdescriptionfavorit = await descriptionfavorit.create({
          film_id: film_id,
          description: description,
          country: country,
          rating: rating,
          sutradara: sutradara,
        });
        return res.send(newdescriptionfavorit);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async show(req, res) {
      try {
        const { id } = req.params;
        const finddescription = await descriptionfavorit.findOne({
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
        const updated = await descriptionfavorit.update(
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
        await descriptionfavorit.destroy({
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
  
  module.exports = descriptionfavoritcontroller;
  