const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Pelicula extends Model {}

Pelicula.init(
  {
    idpelicula: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    imagen: DataTypes.BLOB,
    titulo:DataTypes.STRING,
    fecha_de_creacion:DataTypes.DATE,
    calificacion:DataTypes.INTEGER, 
    // validate:{min: 1, max:5}, 
    personajes_asociados:DataTypes.INTEGER
  },
  {
    sequelize,
    modelName: "pelicula",
  }
);
module.exports = Pelicula;