const path = require('path');

const express = require('express');

const dir = require('../util/path');

const router = express.Router();

const list = [];

//render the form
router.get('/add-user', (req, res, next) => {
    res.render('add-user', {pgTitle: 'Add Users'});

});

//route to handle form submission and add user to the list
router.post('/add-user', (req, res, next) => {
    list.push(req.body); //push the submitted user data to list array
    res.redirect('/list');
});

exports.routes = router;
exports.list = list;