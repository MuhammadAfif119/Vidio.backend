'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class episodeanime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  episodeanime.init({
    anime_id: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    poster: DataTypes.STRING,
    anime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'episodeanime',
  });
  return episodeanime;
};