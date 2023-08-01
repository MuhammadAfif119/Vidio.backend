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

const descriptionseriescontroller = {
  async index(req, res) {
    try {
      const descriptionseriess = await descriptionseries.findAll();
      return res.send(descriptionseriess);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const {
        series_id,
        jumlah_episode,
        description,
        country,
        rating,
        sutradara,
        pemain,
      } = req.body;
      const newdescription = await descriptionseries.create({
        series_id: series_id,
        jumlah_episode: jumlah_episode,
        description: description,
        country: country,
        rating: rating,
        sutradara: sutradara,
        pemain: pemain,
      });
      return res.send(newdescription);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const finddescription = await descriptionseries.findOne({
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
      const {
        series_id,
        jumlah_episode,
        description,
        country,
        rating,
        sutradara,
        pemain,
      } = req.body;
      const { id } = req.params;
      console.log(req.body, "slsl");
      const updated = await descriptionseries.update(
        {
          series_id: series_id,
          jumlah_episode: jumlah_episode,
          description: description,
          country: country,
          rating: rating,
          sutradara: sutradara,
          pemain: pemain,
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
      await descriptionseries.destroy({
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

module.exports = descriptionseriescontroller;
