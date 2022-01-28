console.log("inicia el llamado a la API");
let apidata = fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => cosole.log(data));

console.log("si", apidata);

