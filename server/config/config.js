const key = require('./config.json');

const tuneKey = process.env.tuneKey ? process.env.tuneKey : key.tuneKey;

const maintenance = process.env.maintenance ? process.env.maintenance : false;


const port = process.env.PORT || 3000;

exports.configs = {
  maintenance,
  tuneKey,
  port,
};
