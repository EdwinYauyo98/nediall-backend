const express = require('express');

const {contact} = require('../contollers/contactController')

const router = express.Router();

router.post('/contact', contact);

module.exports = {
    routes: router
}

