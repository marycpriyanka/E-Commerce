const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Creates Category model
class Category extends Model {}

Category.init(
  {
    // define columns/fields
    id: {
      type: DataTypes.INTEGER,
      // Doesn't allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses autoincrement
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
