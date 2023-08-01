'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jenisenterteinment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jenisenterteinment.init({
    category_id: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jenisenterteinment',
  });
  return jenisenterteinment;
};