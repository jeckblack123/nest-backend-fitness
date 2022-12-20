'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExerciseStep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      {
        ExerciseStep.hasOne(models.Exercise, {
          foreignKey: 'exerciseStepId',
          as: 'exercise',
        });
      }
    }
  }
  ExerciseStep.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExerciseStep',
  });
  return ExerciseStep;
};