const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development'; // production takes precedence if any

const maintenance = false; // local equivalent of process.env.maintenance on remote

exports.configs = {
  port,
  env,
  maintenance,
};
