'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.belongsToMany(models.Statistic, {
        through: 'Food_Log',
        as: 'stats',
        foreignKey: 'foodId',
      });
    }
    }
  }
  Food.init({
    name: DataTypes.STRING,
    calories: DataTypes.DOUBLE,
    weight: DataTypes.DOUBLE,
    fat: DataTypes.DOUBLE,
    proteins: DataTypes.DOUBLE,
    carbohydrates: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};