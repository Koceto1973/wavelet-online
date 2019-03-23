const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development'; // production takes precedence if any

const maintenance = false; // local equivalent of process.env.maintenance on remote

let userKey = '';
let globalIPv4 = '';
if (env === 'development') {
  userKey = require('./config.json').userKey;
  globalIPv4 = require('./config.json').globalIPv4;
} else {
  userKey = process.env.userKey;
  userKey = process.env.globalIPv4;
}

exports.configs = {
  port,
  env,
  maintenance,
  userKey,
  globalIPv4,
};
