const express = require('express');
const router = express.Router();
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
router.get('/', (req, res) => {
  res.json(usersDB);
})
router.get('/:id', (request, response) => {
  const { id } = request.params;
  let userRequested = null;
  usersDB.forEach( (item) => {
    if(item.id === parseInt( id ) ){
      userRequested = item;
    };
  });
  if(userRequested){
    response.json( userRequested )
  }else{
    response.status(404).json({
      message: "user not found",
    })
  };
});

// http://127.0.0.1:3000/users?id=3&name=Jhon&surname=Duarte&userName=Jhon123&phone=123456
router.post('/', (req, res) => {
  try{
    const newUser = req.query;
    usersDB.push( newUser )
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
  usersDB.forEach( (item) => {
    if(item.id === parseInt(id)){
      item.name = name
      item.userName = username
    }
  })
  try{
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
  usersDB = usersDB.filter( item => item.id !== parseInt(id) );
  try{
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
