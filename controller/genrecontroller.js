const { anime,
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
  series, } = require("../models");

const genrecontroller = {
  async index(req, res) {
    try {
      const genres = await genre.findAll();
      return res.send(genres);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { category_id, genres } = req.body;
      const newgenre = await genre.create({
        category_id: category_id,
        genre: genres,
      });
      return res.send(newgenre);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const findgenre = await genre.findOne({
        where: {
          id: id,
        },
      });
      return res.send(findgenre);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async update(req, res) {
    try {
      const { category_id, genres } = req.body;
      const { id } = req.params;
      console.log(req.body, 'slsl');
      const updated = await genre.update(
        {
          category_id: category_id,
          genre: genres,
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
      await genre.destroy({
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

module.exports = genrecontroller;
