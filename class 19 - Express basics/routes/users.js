const express = require('express');
const router = express.Router();
const usersDB = [
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
router.get('/', (request, response) => {
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
    response.json({
      message: "user not found",
      statusCode: "404"
    })
  };
});
router.get('/params/:id/option/:options/name/:name', (request, response) => {
  const { id, options, name } = request.params;
  // let id = request.params.id;
  // let options = request.params.options;
  // let name = request.params.name;

  response.json({
    id,
    options,
    name
  })
});
router.post('/', (req, res) => {
  res.json({
    message: "hello from POST method"
  })
});
router.put('/', (req, res) => {
  res.json({
    message: "hello from PUT method"
  })
});
router.delete('/', (req, res) => {
  res.json({
    message: "hello from DELETE method"
  })
});

module.exports = router;
