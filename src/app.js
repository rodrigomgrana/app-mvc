const express = require('express');

const routerMain = require('./routes/main');
const routerUser = require('./routes/users');

const app = express();

app.use(routerMain);
app.use(routerUser);

app.listen(3001, () => console.log("Servidor escuchando en puerto 3001"));


