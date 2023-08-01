'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  favorit.init({
    genre_id: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    poster: DataTypes.STRING,
    film: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'favorit',
    timestamps: true,
    tableName:'favorits'
  });
  return favorit;
};