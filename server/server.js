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

  if (configs.maintenance) { // site maintenance response
    res.sendFile(path.join(__dirname, '../public/index_maintenance.html')); // no next()
  } else {
    next();
  }
});

app.get(/^/, (req, res) => {
  switch (req.path) {
    case '/': // home page
      res.render('../public/index.hbs');
      break;
    case '/b':
      res.render('../public/index_b.hbs', {
        hrefBack: '/',
        pageTitle: 'Layout basic, stack of blocks',
        prevPage: 'Home page',
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
    case '/b/cp':
      res.render('../public/platforms/ccpp.hbs', {
        hrefBack: '/b',
        pageTitle: 'C / C++',
        prevPage: 'Layout basic page',
      });
      break;
    case '/b/cp/p':
      res.render('../public/projects/ccpp_projects.hbs', {
        hrefBack: '/b/cp',
        pageTitle: 'C / C++ projects',
        prevPage: 'C / C++',
      });
      break;
    case '/b/ch':
      res.render('../public/platforms/csharp.hbs', {
        hrefBack: '/b',
        pageTitle: 'C#',
        prevPage: 'Layout basic page',
      });
      break;
    case '/b/ch/p':
      res.render('../public/projects/csharp_projects.hbs', {
        hrefBack: '/b/ch',
        pageTitle: 'C# projects',
        prevPage: 'C#',
      });
      break;
    case '/b/io':
      res.render('../public/platforms/iosswift.hbs', {
        hrefBack: '/b',
        pageTitle: 'IOS11 / Swift 4.2',
        prevPage: 'Layout basic page',
      });
      break;
    case '/b/io/p':
      res.render('../public/projects/ios_swift_projects.hbs', {
        hrefBack: '/b/io',
        pageTitle: 'IOS / Swift projects',
        prevPage: 'IOS / Swift page',
      });
      break;
    case '/b/ht':
      res.render('../public/platforms/htmlcss.hbs', {
        hrefBack: '/b',
        pageTitle: 'HTML5 / CSS3',
        prevPage: 'Layout basic page',
      });
      break;
    case '/b/ht/p':
      res.render('../public/projects/html_css_projects.hbs', {
        hrefBack: '/b/ht',
        pageTitle: 'HTML / CSS projects',
        prevPage: 'HTML / CSS page',
      });
      break;
    case '/b/js':
      res.render('../public/platforms/javascript.hbs', {
        hrefBack: '/b',
        pageTitle: 'JavaScript / Node.js',
        prevPage: 'Layout basic page',
      });
      break;
    case '/b/js/p':
      res.render('../public/projects/javascript_projects.hbs', {
        hrefBack: '/b/js',
        pageTitle: 'JavaScript / Node.js projects',
        prevPage: 'JavaScript / Node.js page',
      });
      break;
    case '/b/ds':
      res.render('../public/platforms/data_storage.hbs', {
        hrefBack: '/b',
        pageTitle: 'Data Storage',
        prevPage: 'Layout basic page',
      });
      break;
    case '/b/git':
      res.render('../public/platforms/git.hbs', {
        hrefBack: '/b',
        pageTitle: 'Git VCS',
        prevPage: 'Layout basic page',
      });
      break;
    default: // unknown routes
      res.render('../public/index.hbs');
  }
});

app.listen(configs.port, () => {
  console.log(`Server is up and running on port ${configs.port}!`);
});
