const path = require('path');
const fs = require('fs');

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

// activity logger
app.use((req, res, next) => {
  const now = new Date().toString();
  const logEntry = `${now}: ${req.method} ${req.url}`;
  fs.appendFile(path.join(__dirname, '../server/server.log'), logEntry.concat('\n'), (error) => {
    if (error) {
      console.log(error);
    }
  });
  next();
});

// known routes

// unknown route
app.get('/', (req, res) => {
  res.send('Page not found!');
});

app.listen(configs.port, () => {
  console.log(`Server is up and running on port ${configs.port}!`);
});
