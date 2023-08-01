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

const jenisenterteinmentcontroller = {
  async index(req, res) {
    try {
      const jenisenterteinments = await jenisenterteinment.findAll();
      return res.send(jenisenterteinments);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { category_id, genre } = req.body;
      const newgenreseries = await jenisenterteinment.create({
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
      const findgenreseries = await jenisenterteinment.findOne({
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
      const updated = await jenisenterteinment.update(
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
      await jenisenterteinment.destroy({
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

module.exports = jenisenterteinmentcontroller;
