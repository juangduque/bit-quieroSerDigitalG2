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

class UsersController{
  constructor(){
    this.users = users;
  };

  get(){
    if(users){
      return { users: users, type: "succesful"}
    }else{
      return { message: "No hay usuarios en la base de datos", type: "error"}
    };
  };

  getById(id){
    for (let index = 0; index < users.length; index++) {
      if(users[index].id === id){
        console.log("item", users[index])
        return { user: users[index], type: "succesful"}
      }
    }
    return { message: "Usuario no encontrado", type: "error"}
  };

  // create(){

  // };

  // update(id){

  // };

  // delete(id){

  // };
};

module.exports = UsersController;
