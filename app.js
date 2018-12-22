const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/db');

db.authenticate()
    .then(() => console.log('Connected to database...'))
    .catch(err => console.log('ERROR:', err));

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

app.use('/events', require('./routes/events'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));