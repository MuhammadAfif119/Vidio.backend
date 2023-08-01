'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class descriptionseries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  descriptionseries.init({
    series_id: DataTypes.INTEGER,
    jumlah_episode: DataTypes.INTEGER,
    descriptions: DataTypes.STRING,
    country: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    sutradara: DataTypes.STRING,
    pemain: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'descriptionseries',
  });
  return descriptionseries;
};