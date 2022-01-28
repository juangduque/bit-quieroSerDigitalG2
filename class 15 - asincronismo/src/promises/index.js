// Run file: node .\src\promises\index.js

function constructorDePromesa( resolvio, rechazo ){
  const number = 1;
  if( number >= 0){
    resolvio("si se cumplió");
  }else{
    rechazo("no se cumplio");
  };
};

function algoVaAPasar(){
  let promesa = new Promise( constructorDePromesa );
  return promesa;
};

function cuandoSeCumple( siSeLlegaACumplir ){
  console.log( ` ${siSeLlegaACumplir} esto que llamaste` );
};

function cuandoNoSeCumple( noSeCumplio ){
  console.log( noSeCumplio );
};

algoVaAPasar().then( cuandoSeCumple ).catch( cuandoNoSeCumple );

// Las dos funciones son equivalentes.
// const algoVaAPasar = () => { 
//   return new Promise( (resolve, reject) =>{
  
//       if(true){
//           resolve('hey!');
//       }else {
//           reject('woops')
//       }
//   })
// }