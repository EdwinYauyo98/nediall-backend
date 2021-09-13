const express = require('express');

const {
    contact,
    getcontact
} = require('../contollers/contactController')

const router = express.Router();

router.post('/contact', contact);
router.get('/getcontact', getcontact);

module.exports = {
    routes: router
}

