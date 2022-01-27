// Run file: node .\src\promises\index.js

const somethingWillHappen = () => {
  return new Promise( (resolve, reject) => {
    true ? resolve("Se cumplió") :  reject("No se cumplió") 
  })
};

function done(response){
  console.log(response)
};

function errorHappened(error){
  console.error(error)
};

// somethingWillHappen()
//   .then( (response) => console.log(response) )
//   .catch( (error) => console.error(error) );

somethingWillHappen()
  .then( done )
  .catch( errorHappened );