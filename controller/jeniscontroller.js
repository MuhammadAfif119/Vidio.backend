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

const jeniscontroller = {
  async index(req, res) {
    try {
      const jeniss = await jenis.findAll();
      return res.send(jeniss);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { category_id, genre } = req.body;
      const newgenreseries = await jenis.create({
        category_id: category_id,
        genre: genre,
      });
      return res.send(newgenreseries);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const findgenreseries = await jenis.findOne({
        where: {
          id: id,
        },
      });
      return res.send(findgenreseries);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async update(req, res) {
    try {
      const { category_id, genre } = req.body;
      const { id } = req.params;
      console.log(req.body, "slsl");
      const updated = await jenis.update(
        {
          category_id: category_id,
          genre: genre,
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
      await jenis.destroy({
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

module.exports = jeniscontroller;
