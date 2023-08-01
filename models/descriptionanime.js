'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class descriptionanime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  descriptionanime.init({
    anime_id: DataTypes.INTEGER,
    jumlah_episode: DataTypes.INTEGER,
    descriptions: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    karya: DataTypes.STRING,
    studio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'descriptionanime',
  });
  return descriptionanime;
};