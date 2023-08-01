'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  film.init({
    genre_id: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    poster: DataTypes.STRING,
    film: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'film',
    timestamps: true,
    tableName:'films'
  });
  return film;
};