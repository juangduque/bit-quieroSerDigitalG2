##### Librerías requeridas para usar eslint
```
npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier
```

##### Instalar express
```
npm install --save express
```

##### Instalar nodemon
```
npm install -D nodemon
```

##### Ejemplo concatenación de queries:
Con & concatenamos los queries
http://127.0.0.1:3000/users/cualquierCosa?otroNombre=20&MiNombre=Juan


##### Métodos http requeridos por cada entidad
```
app.get('/users', (req, res) => {
  res.json("Hola desde GET");
});

app.get('/users/:id', (req, res) => {
  res.json("Hola desde GET");
});

app.post('/users', function(req, res){
  res.json("Hola desde POST");
});

app.put('/users/:id', function(req, res){
  res.json("Hola desde PUT");
});

app.delete('/users/:id', function(req, res){
  res.json("Hola desde DELETE");
});
```
##### Instalar la librería body parser
```
npm i -S body-parser
```
Esta librería es necesaria para usar los datos del body en nuestra petición http.
