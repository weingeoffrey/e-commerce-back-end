const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id column
    id: {
      // int, no null, primary key, auto inc
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product id column
    product_id: {
      // int, ref product id
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id"
      }
    },
    // tag id column
    tag_id: {
      // int, ref tag id
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
