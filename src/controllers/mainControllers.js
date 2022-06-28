const controller = {
    index: (req,res) => {
        res.send("Bienvenidos a la app");
    },

    contact: (req,res) => {
        res.send("Soy contact");
    },

    about: (req,res) => {
        res.send("Somos el grupo .....");
    }
};

module.exports = controller;
