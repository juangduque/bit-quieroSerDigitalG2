const express = require('express');

const usersRouter = require('./users');
const entriesRouter = require('./entries');
const commentsRouter = require('./comments');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/entries', entriesRouter);
  router.use('/comments', commentsRouter);
};

module.exports = routerApi;
