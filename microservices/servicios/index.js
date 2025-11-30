const express = require('express');
const app = express();
const port = 8080;

app.get('/servicios', (req, res) => {
  res.json([
    { id: 1, nombre: "Lavado básico", precio: 80 },
    { id: 2, nombre: "Lavado completo", precio: 150 },
    { id: 3, nombre: "Lavado premium detallado", precio: 250 }
  ]);
});

app.listen(port, () => {
  console.log(`Microservicio de servicios escuchando en puerto ${port}`);
});
