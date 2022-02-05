const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./routes');
// http://127.0.0.1:3000/ o http://localhost:3000/

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.get('/', (request, response) => {
  response.send("Hola mundo ")
});

routerApi(app);

app.use("/app", express.static("public"));

app.listen(PORT, () => {
  console.log(`Running app in: http://127.0.0.1:${PORT}`)
});
