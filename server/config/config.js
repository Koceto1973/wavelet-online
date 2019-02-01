const port = process.env.PORT || 3000;

const maintenance = process.env.maintenance ? process.env.maintenance : false || false;

exports.configs = {
  maintenance,
  port,
};
