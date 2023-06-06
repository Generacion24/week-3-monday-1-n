const { getAll, create, getOneCountry, remove, update } = require('../controllers/country.controllers');
const express = require('express');

const routerCountry = express.Router();

routerCountry.route('/')
    .get(getAll)
    .post(create)

routerCountry.route('/:id')
    .get(getOneCountry)
    .delete(remove)
    .put(update)


module.exports = routerCountry;