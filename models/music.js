'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  music.init({
    genre_id: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    poster: DataTypes.STRING,
    decription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'music',
  });
  return music;
};