const path = require('path');
const dir = require('./util/path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./Routes/user');
const mainRoutes = require('./Routes/main');
const listRoutes = require('./Routes/list');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(listRoutes);
app.use(mainRoutes);

app.use((req, res, next) => {
    // console.log('Error.');
    res.status(404).sendFile(path.join(dir, 'views', 'error.html'));
});

app.listen(3000);