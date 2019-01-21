const {configs} = require('./config/config'); // maintenance, port
const app = require('express')(); 

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/public/partials');
app.set('view engine', 'hbs');

if (configs.maintenance) { 
  app.use((req, res, next) => {   // site under maintenance
    res.send('maintenance.hbs');  // no next() here, app should block  
  }); 
}

// middleware example with static routes ( no modified res based on req )
// app.use(express.static(__dirname + '/staticAssets')); // if route is here, send it as a response



// middleware example for site activity logger
// app.use((req, res, next) => {
//   var now = new Date().toString();
//   var log = `${now}: ${req.method} ${req.url}`;

//   console.log(log);
//   fs.appendFile('server.log', log + '\n', (error)=>{ 
//     if (error) {
//       console.log('Unable to append the server log!');
//     }
//   });
//   next();
// });

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use((req, res, next) => { // unknown route handler
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(configs.port, () => {
    console.log(`Server is up and running on port ${configs.port}!`); 
}); // https://limitless-bayou-85712.herokuapp.com/