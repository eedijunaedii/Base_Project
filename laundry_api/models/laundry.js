'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Laundry extends Model {
    static associate(models) {
      Laundry.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Laundry.init(
    {
      userId: DataTypes.INTEGER,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Laundry',
    }
  );

  Laundry.addHook('afterCreate', (laundry, options) => {
    console.log('New laundry created:', laundry.id);
  });

  return Laundry;
};
