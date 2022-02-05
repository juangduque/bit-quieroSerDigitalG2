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
    try {
      let userRequested = null;
      this.users.forEach( (item) => {
        if(item.id === parseInt( id ) ){
          userRequested = item;
        };
      });
      if(userRequested){
        return { error: "", body: userRequested, statusCode: 200 };
      }else{
        return { error: "User not found", body: "", statusCode: 404 };
      };
    } catch (error) {
      return { error: "Error unexpected", body: "", statusCode: 500 };
    }
  };

  createUser(newUser){
    try{
      this.users.push( newUser );
      return { error: "", body: "User created successfully", statusCode: 201 };
    }catch(error){
      return { error: "Error unexpected", body: "", statusCode: 500 };
    };
  };

  updateUser(id, data){
    try{
      this.users.forEach( (item) => {
        if(item.id === parseInt(id)){
          item.name = data.name
          item.userName = data.username
          return { error: "", body: "user modified successfully", statusCode: 200 };
        }
      })
      return { error: "User not found", body: "", statusCode: 404 };
    }catch(error){
      return { error: "Error unexpected", body: "", statusCode: 500 };
    };
  };

  deleteUser(id){
    try{
      this.users = this.users.filter( item => item.id !== parseInt(id) );
      return { error: "", body: "user deleted successfully", statusCode: 200 };
    }catch(error){
      return { error: "Error unexpected", body: "", statusCode: 500 };
    }
  };
};

module.exports = UsersService;
