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

const genreanimecontroller = {
  async index(req, res) {
    try {
      const genreanimes = await genreanime.findAll();
      return res.send(genreanimes);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { category_id, genreanimes } = req.body;
      const newgenreanime = await genreanime.create({
        category_id: category_id,
        genreanime: genreanimes,
      });
      return res.send(newgenreanime);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const findgenreanime = await genreanime.findOne({
        where: {
          id: id,
        },
      });
      return res.send(findgenreanime);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async update(req, res) {
    try {
      const { category_id, genreanimes } = req.body;
      const { id } = req.params;
      console.log(req.body, 'slsl');
      const updated = await genreanime.update(
        {
            category_id: category_id,
        genreanime: genreanimes,
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
      await genreanime.destroy({
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

module.exports = genreanimecontroller;
