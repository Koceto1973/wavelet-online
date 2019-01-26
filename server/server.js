const path = require('path');
const fs = require('fs');

const express = require('express');

const app = express();

const hbs = require('hbs');
const { configs } = require('./config/config'); // maintenance, port

hbs.registerPartials(path.join(__dirname, '../public/partials'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public/css')));
app.use(express.static(path.join(__dirname, '../public/platforms')));
app.use(express.static(path.join(__dirname, '../public/projects')));
app.use(express.static(path.join(__dirname, '../public/img')));
app.use(express.static(path.join(__dirname, '../public/svg')));
app.use(express.static(path.join(__dirname, '../public/icons')));
app.use(express.static(path.join(__dirname, '../public/icons')));

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

app.get(/^/, (req, res) => {
  switch (process.env.route) {
    case '/': // home page
      res.render('../public/index.hbs');
      break;
    case '/b':
      res.render('../public/index_b.hbs', {
        hrefBack: '/',
        pageTitle: 'Layout basic, stack of blocks',
      });
      break;
    case '/p': // layout by the position property
      res.sendFile(path.join(__dirname, '../public/index_maintenance.html'));
      // res.render('../public/index_p.hbs');
      break;
    case '/ft': // layout by the float property
      res.sendFile(path.join(__dirname, '../public/index_maintenance.html'));
      // res.render('../public/index_ft.hbs');
      break;
    case '/bi': // layout by the block and inline set of properties
      res.sendFile(path.join(__dirname, '../public/index_maintenance.html'));
      // res.render('../public/index_bi.hbs');
      break;
    case '/fx': // layout by the flexbox model
      res.sendFile(path.join(__dirname, '../public/index_maintenance.html'));
      // res.render('../public/index_fx.hbs');
      break;
    case '/g': // layout by the grid model
      res.sendFile(path.join(__dirname, '../public/index_maintenance.html'));
      // res.render('../public/index_g.hbs');
      break;
    case '/b/ht':
      res.render('../public/platforms/htmlcss.hbs', {
        hrefBack: '/b',
        pageTitle: 'HTML5 / CSS3',
      });
      break;
    case '/b/ht/p':
      res.render('../public/projects/html_css_projects.hbs', {
        hrefBack: '/b/ht',
        pageTitle: 'HTML5 / CSS3',
      });
      break;
    case '/b/js':
      res.render('../public/platforms/javascript.hbs', {
        hrefBack: '/b',
        pageTitle: 'JavaScript / Node.js',
      });
      break;
    case '/b/js/p':
      res.render('../public/projects/javascript_projects.hbs', {
        hrefBack: '/b/js',
        pageTitle: 'JavaScript / Node.js projects',
      });
      break;
    case '/b/git':
      res.render('../public/platforms/git.hbs', {
        hrefBack: '/b',
        pageTitle: 'Git VCS',
      });
      break;
    default: // unknown routes
      res.render('../public/index.hbs');
      // res.sendFile(path.join(__dirname, '../public/index.html'));
  }
});

app.listen(configs.port, () => {
  console.log(`Server is up and running on port ${configs.port}!`);
});
