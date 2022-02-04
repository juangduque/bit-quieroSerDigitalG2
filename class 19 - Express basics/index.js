const express = require('express');
const PORT = 3000;

const app = express();
// http://127.0.0.1:3000/ o http://localhost:3000/



app.get('/', (request, response) => {
  response.send("Hola mundo ")
});



app.get('/entries', (req, res) => {
  res.json({
    message: "this is for entries with GET method"
  })
})

app.post('/entries', (req, res) => {
  res.json({
    message: "this is for entries with POST method"
  })
})

app.put('/entries', (req, res) => {
  res.json({
    message: "this is for entries with PUT method"
  })
})

app.delete('/entries', (req, res) => {
  res.json({
    message: "this is for entries with DELETE method"
  })
})

app.get('/comments', (req, res) => {
  res.json({
    message: "this is for comments with GET method"
  })
})
app.post('/comments', (req, res) => {
  res.json({
    message: "this is for comments with POST method"
  })
})
app.put('/comments', (req, res) => {
  res.json({
    message: "this is for comments with PUT method"
  })
})
app.delete('/comments', (req, res) => {
  res.json({
    message: "this is for comments with DELETE method"
  })
})

app.listen(PORT, () => {
  console.log(`Running app in: http://127.0.0.1:${PORT}`)
});
