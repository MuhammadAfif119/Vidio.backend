'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class description extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.film, {
        foreignKey:'film_id',
        as:'stoka'
      })
      // define association here
    }
  }
  description.init({
    film_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    country: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    sutradara: DataTypes.STRING,
    pemain: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'description',
    timestamps: true,
    tableName:'descriptions'
  });
  return description;
};