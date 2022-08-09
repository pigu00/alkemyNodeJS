const express = require("express");
const app = express();
const sequelize = require("./db/database");
const Genero = require("./db/models/genero");
const Personaje = require("./db/models/personaje");

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/personaje", require("./routes/routes.Crud"));


app.listen(PORT, () => {
  console.log("Servidor inicado en ", PORT);

  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Conexion exitosa");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});
