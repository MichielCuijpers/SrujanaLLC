const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../config/db');
const routes = require('../routes/routes');

db.authenticate()
    .then(() => console.log('Connected to database...'))
    .catch(err => console.log('ERROR:', err));

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 5000;

routes(app, express);

app.listen(PORT, console.log(`Server started on port ${PORT}`));