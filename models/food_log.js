'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food_log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Food_log.init({
    food_id: DataTypes.INTEGER,
    statisticId: DataTypes.INTEGER,
    isEaten: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Food_log',
  });
  return Food_log;
};