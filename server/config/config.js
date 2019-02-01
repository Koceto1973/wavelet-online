const env = process.env.NODE_ENV || 'development'; // production takes precedence if any

let key = '';

if (env === 'development') { // see package json
  key = require('./config.json');
}

const tuneKey = process.env.tuneKey ? process.env.tuneKey : key.tuneKey;

const maintenance = process.env.maintenance ? process.env.maintenance : false;

const port = process.env.PORT || 3000;

exports.configs = {
  maintenance,
  tuneKey,
  port,
};
