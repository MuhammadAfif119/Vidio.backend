'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class descriptionfavorit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  descriptionfavorit.init({
    film_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    country: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    sutradara: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'descriptionfavorit',
    timestamps: true,
    tableName:'descriptionfavorits'
  });
  return descriptionfavorit;
};