'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sticker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sticker.belongsToMany(models.Statistic, {
        through: 'StickerLog',
        as: 'stats',
        foreignKey: 'stickerId',
      });
    }
  }
  Sticker.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sticker',
    },
  );
  return Sticker;
};
