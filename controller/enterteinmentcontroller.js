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

const enterteinmentcontroller = {
  async index(req, res) {
    try {
      const enterteinments = await enterteinment.findAll();
      return res.send(enterteinments);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { jenis_id, judul, poster, description } = req.body;
      const newfilm = await enterteinment.create({
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
      const findfilm = await enterteinment.findOne({
        where: {
          id: id,
        },
      });
      return res.send(findfilm);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async update(req, res) {
    try {
      const { jenis_id, judul, poster, description } = req.body;
      const { id } = req.params;
      console.log(req.body, "slsl");
      const updated = await enterteinment.update(
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
      await enterteinment.destroy({
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

module.exports = enterteinmentcontroller;
