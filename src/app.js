const express = require('express');

const path = require('path');


const routerMain = require('./routes/main');
const routerUser = require('./routes/users');

const app = express();

app.set('view engine','ejs');

//app.set('views', 'src/views');

app.use(express.static(path.join(__dirname,'../public')));


app.use(routerMain);
app.use(routerUser);

app.listen(3001, () => console.log("Servidor escuchando en puerto 3001"));


