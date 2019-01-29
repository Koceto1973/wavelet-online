const maintenance = process.env.maintenance === 'true' ? true : false || false; // site maintenance?

const port = process.env.PORT || 3000;

exports.configs = {
  maintenance,
  port,
};
