const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development'; // production takes precedence if any

const maintenance = false; // local equivalent of process.env.maintenance on remote

let userKey = '';
if (env === 'development') {
  userKey = require('./config.json').userKey;
} else {
  userKey = process.env.userKey;
}

console.log(userKey);

exports.configs = {
  port,
  env,
  maintenance,
  userKey,
};
