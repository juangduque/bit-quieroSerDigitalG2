const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "this is for entries with GET method"
  })
})

router.post('/', (req, res) => {
  res.json({
    message: "this is for entries with POST method"
  })
})

router.put('/', (req, res) => {
  res.json({
    message: "this is for entries with PUT method"
  })
})

router.delete('/', (req, res) => {
  res.json({
    message: "this is for entries with DELETE method"
  })
})

module.exports = router;
