'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stats.belongsToMany(models.Food, {
        through: 'Food_Log',
        as: 'foods',
        foreignKey: 'statisId',
      });
      stats.belongsToMany(models.Sticker, {
        through: 'StickerLog',
        as: 'stickers',
        foreignKey: 'statsId',
      });
    }
  }
  stats.init({
    date: DataTypes.DATE,
    actual_calories: DataTypes.DOUBLE,
    goal_calories: DataTypes.DOUBLE,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'stats',
  });
  return stats;
};