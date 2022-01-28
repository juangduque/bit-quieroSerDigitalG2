// Código sacado de: https://www.youtube.com/watch?v=2Xm9P_tXtK8

const BASE_API_URL = "https://jsonplaceholder.typicode.com"; //Se define la URL base de la api.

const container = document.querySelector("#container"); // Se referencia el contenedor del DOM
const ul = document.createElement("ul"); // Se crea un elemento del tipo lista desordenada y se asigna a la variabla ul

/*
  A continuación se hace uso del método fetch cargado por defecto en los navegadores para consumir 
  API´s de forma nativa.
  Esta es la evolución de XMLHttpRequest, el cual una promesa para funcionar.
*/

fetch( `${ BASE_API_URL }/users` ) //Aqui se le pasa por parámetro la API a consumir indicando el end point.
  .then( (response) => {
    //Descomenta la siguiente línea para ver la respuesta por consola
    // console.log( response );
    return response.json(); // Los datos de la respuesta se pasan a formato JSON y se retornan al siguiente bloque .then()
  })
  .then( (users) => { // Se reciben los datos del anterior bloque then y se llaman asignan a la variable "users"
    /*
      El método forEach es como un bucle for pero nos ahorra el escribir dicho bucle y va desde donde inicia el arreglo
      hasta la última posición de este mismo. Si quieres investigar más sobre el funcionamiento de este método, investiga
      sobre el protocolo iterador
    */
    users.forEach( (user) => { //Aqui ingresa elemento por elemento del arreglo y se especifica llamadolo "user" así en singular.
      let liElement = document.createElement('li'); // Se crea un elemento li y se asigna a la variable "liElement".
      // A continuación se crea un node de texto y se agrega dicho nodo al elemento li
      liElement.appendChild( 
        document.createTextNode(`Usuario: ${user.name} email: ${user.email}`) //Se especifica cuál es el contenido que tendrá el nodo de texto.
      );
      ul.appendChild( liElement ); //Se agrega el elemento de la lista con su contenido a la lista creada en la lína 6
    });
    container.appendChild(ul); // Se agrega la lista al contenedor en el DOM.
  })
  .catch( (error => console.log( new Error(error) ) ) ); //Se implementa un catch de errores en caso de que algún evento inesperado llegue a ocurrir.




//  A Continuación el mismo bloque de código fetch de arriba pero sin comentarios por si estos te dificultan la lectura.

// fetch( `${ BASE_API_URL }/users`)
//   .then( (response) => {
//     return response.json();
//   })
//   .then( (users) => {
//     users.forEach( (user) => {
//       let liElement = document.createElement('li');
//       liElement.appendChild( 
//         document.createTextNode(`Usuario: ${user.name} email: ${user.email}`)
//       );
//       ul.appendChild( liElement );
//     });
//     container.appendChild(ul);
//   })
//   .catch( (error => console.log( new Error(error) ) ) );




// A continuación el mismo bloque de código fetch modificado por si no ves claramente como se usan las funciones como argumento

// function primeraRespuestaDeLaAPI(response){
//   //console.log(response); //Descomenta para ver la respuesta de la API
//   return response.json();
// };

// function mostrarLosDatosViaDOM(users){
//   // console.log(users); //Descomenta para ver el arreglo de usuarios por consola
//   for (let index = 0; index < users.length; index++) {
//     let liElement = document.createElement('li');
//     liElement.appendChild( 
//       document.createTextNode(`Usuario: ${users[ index ].name} email: ${users[ index ].email}`)
//     );
//     ul.appendChild( liElement );    
//   };
//   container.appendChild(ul);
// };

// function mostrarElErrorPorConsola(error){
//   console.log( new Error(error) )
// };

// fetch( `${ BASE_API_URL }/users`)
//   .then( primeraRespuestaDeLaAPI )
//   .then( mostrarLosDatosViaDOM )
//   .catch( mostrarElErrorPorConsola );