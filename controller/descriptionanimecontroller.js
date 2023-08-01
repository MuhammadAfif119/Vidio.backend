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

const descriptionanimecontroller = {
  async index(req, res) {
    try {
      const descriptionanimes = await descriptionanime.findAll();
      return res.send(descriptionanimes);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { anime_id, jumlah_episode, description, rating, karya, studio } =
        req.body;
      const newdescription = await descriptionanime.create({
        anime_id: anime_id,
        jumlah_episode: jumlah_episode,
        description: description,
        rating: rating,
        karya: karya,
        studio: studio,
      });
      return res.send(newdescription);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const finddescription = await descriptionanime.findOne({
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
      const { anime_id, jumlah_episode, description, rating, karya, studio } =
        req.body;
      const { id } = req.params;
      console.log(req.body, "slsl");
      const updated = await descriptionanime.update(
        {
          anime_id: anime_id,
          jumlah_episode: jumlah_episode,
          description: description,
          rating: rating,
          karya: karya,
          studio: studio,
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
      await descriptionanime.destroy({
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

module.exports = descriptionanimecontroller;
