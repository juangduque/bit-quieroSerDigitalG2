const express = require('express');

const usersRouter = require('./users');

function routerApi(){
  const router = express.Router();
  router.use('/users', usersRouter)
}

module.exports = routerApi;
