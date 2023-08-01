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
  
  const terbaikcontroller = {
    async movie(req,res){
    try{
        const query = `SELECT films.id, films.poster, descriptions.rating FROM films JOIN descriptions ON films.id = descriptions.film_id ORDER BY descriptions.rating DESC;`;
        const results = await sequelize.query(query, {
            type: QueryTypes.SELECT,
          });
    
          console.log(results);
          res.json(results);
        } catch (error) {
          console.error("Unable to fetch data:", error);
          res.status(500).json({ error: "Unable to fetch data" });
      }
    },
    async series(req,res){
        try{
            const query = `SELECT series.id, series.poster, descriptionseries.rating
            FROM series
            JOIN descriptionseries ON series.id = descriptionseries.series_id
            ORDER BY descriptionseries.rating DESC;
            `;
            const results = await sequelize.query(query, {
                type: QueryTypes.SELECT,
              });
        
              console.log(results);
              res.json(results);
            } catch (error) {
              console.error("Unable to fetch data:", error);
              res.status(500).json({ error: "Unable to fetch data" });
          }
        },
        async anime(req,res){
            try{
                const query = `SELECT animes.id, animes.poster, descriptionanimes.rating
                FROM animes
                JOIN descriptionanimes ON animes.id = descriptionanimes.anime_id
                ORDER BY descriptionanimes.rating DESC;
                `;
                const results = await sequelize.query(query, {
                    type: QueryTypes.SELECT,
                  });
            
                  console.log(results);
                  res.json(results);
                } catch (error) {
                  console.error("Unable to fetch data:", error);
                  res.status(500).json({ error: "Unable to fetch data" });
              }
            },
            async searchmovie(req, res) {
              try {
                const { search } = req.params;
                const query = `SELECT films.id, films.poster, films.judul
                              FROM films
                              WHERE
                                  films.judul LIKE '%${search}%'
                              `;
                const results = await sequelize.query(query, {
                  type: QueryTypes.SELECT,
                });
            
                console.log(results);
                res.json(results);
              } catch (error) {
                console.error("Unable to fetch data:", error);
                res.status(500).json({ error: "Unable to fetch data" });
              }
            },
            async searchseries(req, res) {
              try {
                const { search } = req.params;
                const query = `SELECT series.id, series.poster, series.judul
                              FROM series
                              WHERE
                              series.judul LIKE '%${search}%'
                              `;
                const results = await sequelize.query(query, {
                  type: QueryTypes.SELECT,
                });
            
                console.log(results);
                res.json(results);
              } catch (error) {
                console.error("Unable to fetch data:", error);
                res.status(500).json({ error: "Unable to fetch data" });
              }
            },
            async searchanime(req, res) {
              try {
                const { search } = req.params;
                const query = `SELECT animes.id, animes.poster, animes.judul
                              FROM animes
                              WHERE
                              animes.judul LIKE '%${search}%'
                              `;
                const results = await sequelize.query(query, {
                  type: QueryTypes.SELECT,
                });
            
                console.log(results);
                res.json(results);
              } catch (error) {
                console.error("Unable to fetch data:", error);
                res.status(500).json({ error: "Unable to fetch data" });
              }
            },
      };

  module.exports = terbaikcontroller;