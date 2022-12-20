'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestGoals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RestGoals.hasOne(models.stats, {
        foreignKey: 'RestGoalsId',
        as: 'stats',
      });
    }
  }
  RestGoals.init({
    text: DataTypes.STRING,
    statsId: DataTypes.INTEGER,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'RestGoals',
  });
  return RestGoals;
};