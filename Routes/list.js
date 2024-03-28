const path = require('path');

const express = require('express');

const dir = require('../util/path');

const usersList = require('./user');

const router = express.Router();


router.get('/list', (req, res, next) => {
    console.log(usersList.list);
    res.render('list', {pgTitle: 'Users List', users: usersList.list}); //pass the list array to the template

});

module.exports = router;