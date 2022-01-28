
const somethingWillHappen = () => {
  return new Promise( (resolve, reject) => {
    let number = 5;
    if(number >= 0){
      setTimeout( () => {
        resolve("Si se cumplió la llamada a la API");
      }, 2000);
    }else{
      const error = new Error("Hubo un error al llamar la API");
      reject(error);
    }
  });
};

console.log("Inició el programa");

function whenItsDone( data ){
  console.log(data);
};

somethingWillHappen()
  .then( whenItsDone )
  .catch( error => console.log(error))