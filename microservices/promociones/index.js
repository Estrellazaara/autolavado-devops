const express = require('express');
const app = express();
const port = 8080;

app.get('/promociones', (req, res) => {
  res.json([
    { id: 1, titulo: "Día del Padre", descuento: "20%" },
    { id: 2, titulo: "Navidad", descuento: "15%" },
    { id: 3, titulo: "Lavado + Encerado", descuento: "10%" }
  ]);
});

app.listen(port, () => {
  console.log(`Microservicio de promociones escuchando en puerto ${port}`);
});
