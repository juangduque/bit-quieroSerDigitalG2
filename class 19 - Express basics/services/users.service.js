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

  getUserById(){

  };

  createUser(){

  };

  updateUser(){

  };
  deleteUser(){

  };
};

module.exports = UsersService;
