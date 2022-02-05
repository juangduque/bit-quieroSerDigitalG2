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

class UsersService{
  constructor(){
    this.users = usersDB;
  };

  getAllUsers(){
    return this.users;
  };

  getUserById(id){
    let userRequested = null;
    usersDB.forEach( (item) => {
      if(item.id === parseInt( id ) ){
        userRequested = item;
      };
    });
    if(userRequested){
      return { error: "", body: userRequested, statusCode: 200 };
    }else{
      return { error: "User not found", body: "", statusCode: 404 };
    };
  };

  createUser(){

  };

  updateUser(){

  };
  deleteUser(){

  };
};

module.exports = UsersService;
