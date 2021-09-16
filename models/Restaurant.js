const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: sequelize.TEXT(long),
      allowNull: true,
      
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
        type: DataTypes.STRING,
        allowNull: false,
        isUrl: true,
      },
    owner_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          unique: false
        }
      },
  },
 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Restaurants',
  }
);

module.exports = Restaurant;
