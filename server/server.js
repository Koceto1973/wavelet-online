const path = require('path');
const fs = require('fs');

const express = require('express');

const app = express();

const hbs = require('hbs');
const { configs } = require('./config/config'); // maintenance, port

hbs.registerPartials(path.join(__dirname, '../public/partials'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public/css')));
app.use(express.static(path.join(__dirname, '../public/img')));
app.use(express.static(path.join(__dirname, '../public/svg')));

// activity logger & maintenance module
app.use((req, res, next) => {
  const now = new Date().toString();
  const logEntry = `${now}: ${req.headers.host} ${req.method}${req.url}`;
  fs.appendFile(path.join(__dirname, '../server/server.log'), logEntry.concat('\n'), (error) => {
    if (error) {
      console.log(error);
    }
  });

  // site under maintenance
  if (configs.maintenance) {
    res.sendFile(path.join(__dirname, '../public/index_maintenance.html')); // no next() here, app should block
  } else {
    process.env.route = req.path;
    next();
  }
});

app.get('*', (req, res) => {
  switch (process.env.route) {
    case '/': // home page
      res.render('../public/index.hbs');
      break;
    default: // unknown routes
      res.render('../public/index.hbs');
  }
});

app.listen(configs.port, () => {
  console.log(`Server is up and running on port ${configs.port}!`);
});
