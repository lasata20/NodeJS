const path = require('path');

const express = require('express');

const dir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('main', {pgTitle: 'Home'});
});

module.exports = router;