const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Genero extends Model {}

Genero.init(
  {
    idgenero: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    nombre: DataTypes.STRING,
    imagen: DataTypes.BLOB,
    peliculas_asociadas: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "genero",
  }
);
module.exports = Genero;
