const path = require('path');

const controller = {
    index: (req,res) => {
        //res.send("<h1>Bienvenidos a la app</h1>");
        res.render(path.join(__dirname,'../views/index'));
    },

    contact: (req,res) => {
        //res.send("Soy contact");
        res.render(path.join(__dirname,'../views/contact'));
    },

    about: (req,res) => {
        res.send("Somos el grupo .....");
    }
};

module.exports = controller;
