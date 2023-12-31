'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sport.init({
    jenis_id: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    poster: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sport',
  });
  return sport;
};