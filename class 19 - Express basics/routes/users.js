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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const result = service.getUserById(id);
  if(result.error !== ""){
    res.status( result.statusCode ).json({
      message: result.error
    })
  }else{
    res.status( result.statusCode ).json({
      user: result.body
    })
  };
});

router.post('/', (req, res) => {
  const {body}= req;
  const result = service.createUser(body);
  if(result.error !== ""){
    res.status( result.statusCode ).json({
      message: result.error
    })
  }else{
    res.status( result.statusCode ).json({
      message: result.body
    })
  };
});

router.put('/:id', (req, res) => {
  const {body}= req;
  const result = service.updateUser(body);
  if(result.error !== ""){
    res.status( result.statusCode ).json({
      message: result.error
    })
  }else{
    res.status( result.statusCode ).json({
      message: result.body
    })
  };
});

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const result = service.deleteUser(id);
  if(result.error !== ""){
    res.status( result.statusCode ).json({
      message: result.error
    })
  }else{
    res.status( result.statusCode ).json({
      message: result.body
    })
  };
});

module.exports = router;
