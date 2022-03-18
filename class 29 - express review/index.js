const express = require("express");
const body_parser = require("body-parser");
//http://localhost: o http://127.0.0.1:

const PORT = 3000;

const app = express();

app.use(body_parser.json());
app.use(express.json());

let users = [
  {
    id: "1",
    name: "Jhon",
    last_name: "Doe",
    id_number: "1234",
    user_name: "jhon123",
    email: "jdoe@mail.com",
    password: "abc123"
  },
  {
    id: "2",
    name: "Oscar",
    last_name: "Diaz",
    id_number: "5678",
    user_name: "oscar123",
    email: "oscar@mail.com",
    password: "qwer123"
  },
  {
    id: "3",
    name: "Ana",
    last_name: "Smith",
    id_number: "1278",
    user_name: "ana123",
    email: "ana@mail.com",
    password: "bnm567"
  },
];

app.get('/users', (req, res) => {
  if(users){
    res.json(users);
  }else{
    res.send("Hubo un error");
    console.error(new Error("No hay usuarios en la base de datos") );
  };
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  // for (let index = 0; index < users.length; index++) {
  //   if(users[index].id === id){
  //     res.json(users[index]);
  //   }
  // };

  users.forEach((item) => {
    if(item.id === id){
      res.json(item);
    }
  });

  // const userToBeReturned = users.filter(user => user.id === id);
  // if(userToBeReturned !== []){
  //   res.json(userToBeReturned)
  // };
  res.json("Usuario no existe");
});

app.post('/users', function(req, res){
  // const { body } = req;
  console.log("body:", req.body)
  res.json("Usuario creado exitosamente");
});

app.put('/users/:id', function(req, res){
  res.json("Hola desde PUT");
});

app.delete('/users/:id', function(req, res){
  res.json("Hola desde DELETE");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
