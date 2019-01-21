const app = require('express')();
const server = require('http').Server(app);

const port = process.env.PORT || 3000;
// const hbs = require('hbs');

// middleware, example of catching all routes 
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');  // no data injection here
//   // no next() here, app blocks here
// });

// middleware example with static routes ( no modified res based on req )
// app.use(express.static(__dirname + '/staticAssets')); // if route is here, send it as a response

// hbs.registerPartials(__dirname + '/views/partials');
// app.set('view engine', 'hbs');

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

// middleware, unknown route sends back json with errorMessage
app.use((req, res, next) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`); 
});