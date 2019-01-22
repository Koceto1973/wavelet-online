const maintenance = process.env.maintenance || false; // site maintenance?
const port = process.env.PORT || 3000;

exports.configs = {
  maintenance,
  port,
};
