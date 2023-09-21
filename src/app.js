const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.get("/mensaje", (req, res) => {
  res.send("este es mi servidor usando express");
});

// app.listen(port, () => {
//   console.log(`La aplicación está escuchando en http://localhost:${port}`);
// });

module.exports = app;

