const express = require('express');
const routerApi = require('./routes');
const PORT = 3000;

const app = express();
// http://127.0.0.1:3000/ o http://localhost:3000/

app.get('/', (request, response) => {
  response.send("Hola mundo ")
});

routerApi(app);

app.listen(PORT, () => {
  console.log(`Running app in: http://127.0.0.1:${PORT}`)
});
