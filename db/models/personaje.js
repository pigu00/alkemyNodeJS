const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Personaje extends Model {}

Personaje.init(
  {
    idpersonaje: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    imagen: DataTypes.BLOB,
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    historia: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "personaje",
  }
);
module.exports = Personaje;
