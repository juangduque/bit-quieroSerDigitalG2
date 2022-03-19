const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users.controllers');

const user_controllers = new usersControllers();

router.get('/', (req, res) => {
  const result = user_controllers.get();
  if(result.type === "error"){
    console.error(new Error( result.message) );
    res.send("Hubo un error");
  }else{
    res.json(result.users);
  };
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = user_controllers.getById( id );
  console.log("result: ", result)
  if(result.type === "error"){
    // console.error(new Error( result.message) );
    res.send("Hubo un error");
  }else{
    res.json(result.user);
  };
});

router.post('/', function(req, res){
  // const { body } = req;
  console.log("body:", req.body)
  res.json("Usuario creado exitosamente");
});

router.put('/:id', function(req, res){
  res.json("Hola desde PUT");
});

router.delete('/:id', function(req, res){
  res.json("Hola desde DELETE");
});

module.exports = router;
