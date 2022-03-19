const express = require('express');
const usersRouter = require('./users.routes');
const productsRouter = require('./products.routes');
const categoriesRouter = require('./categories.routes');
const billsRouter = require('./bills.routes');

function routerApi(app) {
  const router =  express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/bills', billsRouter);
};

module.exports = routerApi
