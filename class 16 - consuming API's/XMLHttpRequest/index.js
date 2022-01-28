// Cógigo sacado del siguiente video: https://www.youtube.com/watch?v=2Xm9P_tXtK8

const BASE_API_URL = "https://jsonplaceholder.typicode.com"; //Se define la URL base de la api.

const xhr = new XMLHttpRequest(); //Se instancia un objeto del tipo XMLHttpRequest

function fetchData(){
  /* 
    La siguiente condicional evalua que el estado AJAX sea 4 y que el estado http sea 200.
    En caso de que alguno de los dos no se cumpla no va a pasar nada.
  */ 
  if(xhr.readyState === 4 && xhr.status === 200){
    const data = JSON.parse(xhr.response); // Se pasa la respuesta del llamado a la API a formato JSON.
    //Descomenta para la siguiente linea para ver data por consola.
    // console.log(data); 
    const container = document.querySelector("#container"); // Se asigna el elemento del DOM a la variable con el mismo nombre.
    /*
    En la siguiente linea se hace uso del método map de los arreglos para obtener cada uno de los items
    ya que sé que data es un arreglo. con este método puedo acceder a cada uno de los elementos y
    tranformarlos en otro, en este caso un elemento html y cada uno de esos elementos los asigno a la
    variable "listTemplate".
    */
    const listTemplate = data.map( user => `<li>Usuario: ${user.name} email: ${user.email}</li>`); 
    //Descomenta la siguiente linea para ver los elementos de lista por consola
    // console.log(listTemplate);
    container.innerHTML = `<ul>${listTemplate}</ul>`; // Se agregan los elementos de la lista directamente al DOM.
  };
};

xhr.addEventListener("load", fetchData); // Se agrega un listener encargado de escuchar cuando se ha cargado la petición.
xhr.open("GET", `${BASE_API_URL}/users`); //Se especifica que tipo de operación vamos a realizar y a qué api, agregando el endpoint correspondiente.
xhr.send(); // Se hace el llamado a la API.



// A continuación el mismo código de arriba pero sin comentarios por si estos te dificultan la lectura del código.

// function fetchData(){
//   if(xhr.readyState === 4 && xhr.status === 200){
//     const data = JSON.parse(xhr.response);    
//     // console.log(data); //Descomenta para la siguiente linea para ver data por consola.
//     const container = document.querySelector("#container"); // Se asigna el elemento del DOM a la variable con el mismo nombre.
//     const listTemplate = data.map( user => `<li>Usuario: ${user.name} email: ${user.email}</li>`);
//     // console.log(listTemplate);  //Descomenta la siguiente linea para ver los elementos de lista por consola
//     container.innerHTML = `<ul>${listTemplate}</ul>`;
//   };
// };

// xhr.addEventListener("load", fetchData);
// xhr.open("GET", `${BASE_API_URL}/users`);
// xhr.send();
