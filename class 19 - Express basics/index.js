const express = require('express');
const PORT = 3000;

const app = express();
// http://127.0.0.1:3000/ o http://localhost:3000/

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

app.get('/', (request, response) => {
  response.send("Hola mundo ")
});

// app.get('/users', (request, response) => {
//   response.json({
//     message: "Esta es una respuesta en formato"
//   })
// });

// http://localhost:3000/users?size=10
app.get('/users', (request, response) => {
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

app.get('/users/:id', (request, response) => {
  const userID = request.params.id
  let userRequested = null;
  usersDB.forEach( (item) => {
    if(item.id === parseInt( userID) ){
      userRequested = item;
    };
  });
  if(userRequested){
    response.json(userRequested)
  }else{
    response.json({
      message: "user not found",
      statusCode: "404"
    })
  };
});

app.listen(PORT, () => {
  console.log(`Running app in: http://127.0.0.1:${PORT}`)
});
