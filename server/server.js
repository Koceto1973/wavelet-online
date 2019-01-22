const path = require('path');

const express = require('express');

const app = express();

const hbs = require('hbs');
const { configs } = require('./config/config'); // maintenance, port

hbs.registerPartials(path.join(__dirname, '/public/partials'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public/css')));
app.use(express.static(path.join(__dirname, '../public/img')));

if (configs.maintenance) {
  app.use((req, res) => { // site under maintenance
    res.sendFile(path.join(__dirname, '../public/index_maintenance.html')); // no next() here, app should block
  });
}

// known routes

// unknown route

// activity logger

app.listen(configs.port, () => {
  console.log(`Server is up and running on port ${configs.port}!`);
}); // https://limitless-bayou-85712.herokuapp.com/
