'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MoveGoals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MoveGoals.hasOne(models.stats, {
        foreignKey: 'MoveGoalsId',
        as: 'stats',
      });
    }
  }
  MoveGoals.init({
    text: DataTypes.STRING,
    statsId: DataTypes.INTEGER,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MoveGoals',
  });
  return MoveGoals;
};