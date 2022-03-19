const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json("Hola desde get");
});

router.get('/:id', (req, res) => {
  res.json("Hola desde get con id");
});

router.post('/', function(req, res){
  res.json("Hola desde post");
});

router.put('/:id', function(req, res){
  res.json("Hola desde PUT");
});

router.delete('/:id', function(req, res){
  res.json("Hola desde DELETE");
});

module.exports = router;
