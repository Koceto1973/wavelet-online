const maintenance = process.env.RAZZLE_maintenance || false; // site maintenance?
const port = process.env.PORT || 3000;

exports.configs = {
  maintenance,
  port,
};
