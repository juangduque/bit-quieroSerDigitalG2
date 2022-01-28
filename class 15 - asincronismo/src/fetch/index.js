console.log("inicia el llamado a la API");
let apidata = fetch('https://rickandmortyapi.com/api/location/1')
  .then(response => response.json())
  .then(data => data);

console.log("si", apidata);

