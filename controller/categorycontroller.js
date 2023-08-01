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
  
  const categorycontroller = {
    async index(req, res) {
      try {
        const categorys = await category.findAll();
        return res.send(categorys);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async store(req, res) {
      try {
        const { categorys } = req.body;
        const newcategory = await category.create({
          category: categorys
        });
        return res.send(newcategory);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async show(req, res) {
      try {
        const { id } = req.params;
        const findcategory= await category.findOne({
          where: {
            id: id,
          },
        });
        return res.send(findcategory);
      } catch (error) {
        return res.send(error.message);
      }
    },
  
    async update(req, res) {
      try {
        const { categorys } = req.body;
        const { id } = req.params;
        console.log(req.body, "slsl");
        const updated = await category.update(
          {
            category: categorys
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
        await category.destroy({
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
  
  module.exports = categorycontroller;
  