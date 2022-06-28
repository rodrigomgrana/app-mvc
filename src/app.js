const express = require('express');

const routerMain = require('./routes/main')

const app = express();

app.use(routerMain);

app.listen(3001, () => console.log("Servidor escuchando en puerto 3001"));


