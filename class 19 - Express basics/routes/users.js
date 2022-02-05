const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service');
let usersDB = [
  {
    id: 1,
    name: "Jhon",
    surname: "Doe",
    userName: "jhoncito99",
    phone: "3001234567"
  },
  {
    id: 2,
    name: "Marilyn",
    surname: "Monroe",
    userName: "mary",
    phone: "3001234568"
  }
];

const service = new UsersService;
// http://localhost:3000/users?size=10
router.get('/withQuery', (request, response) => {
  const size = request.query.size
  if(size){
    response.json({
      message: "Ejecutaste una query tipo size",
      size
    })
  }else{
    response.json(usersDB);
  };
});

// DE AQUI PARA ABAJO ESTAN LOS MÉTODOS OFICIALES DE LA APP
router.get('/', (req, res) => {
  const users = service.getAllUsers();
  res.json(users);
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  const result = service.getUserById(id);
  console.log(result.error);
  if(result.error !== ""){
    response.status( result.statusCode ).json({
      user: result.error
    })
  }else{
    response.status( result.statusCode ).json({
      user: result.body
    })
  };
});

router.post('/', (req, res) => {
  const {body}= req;
  try{
    usersDB.push( body );
    res.status(201).json({
      message: "User created succesfuly"
    })
  }catch(error){
    res.status(500).json({
      message: "There was an internal error",
      error
    })
  };
});

router.put('/:id/name/:name/username/:username', (req, res) => {
  const { id, name, username } = req. params;
  try{
    usersDB.forEach( (item) => {
      if(item.id === parseInt(id)){
        item.name = name
        item.userName = username
      }
    })
    res.json({
      message: "User name and it's name modified succesfuly"
    })
  }catch(error){
    res.status(500).json({
      message: "There was an internal error",
      error
    })
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params
  try{
    usersDB = usersDB.filter( item => item.id !== parseInt(id) );
    res.json({
      message: "User deleted succesfuly"
    })
  }catch(error){
    res.status(500).json({
      message: "There was an internal error",
      error
    })
  }
});

module.exports = router;
