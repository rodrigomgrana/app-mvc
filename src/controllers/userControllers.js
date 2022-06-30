const fs = require('fs');

const path = require('path');

const jsonPath = path.join(__dirname,'../database/users.json');

const json = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

const allUsers = json.map(e => {
    return {
      id: e.id,
      name: e.name,
      email: e.email,
    }
  }) 

const controller = {
    allUsers: (req,res) => {

        //res.send(users);
        res.render(path.join(__dirname,'../views/users'),{'allUsers':allUsers})
    },

    getUserId: (req,res) => {
        const id = req.params.id;
        const user = users.find((element) => element.id == parseInt(id));
        if(user){
            res.send(user);
        }else{
            res.send("Not found");
        }
    },

    
};


module.exports= controller;