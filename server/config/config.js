const aws = require('aws-sdk');

const herokuConfig = new aws.S3({
  maintenance: process.env.maintenance,
  tuneKey: process.env.tuneKey,
});

const maintenance = herokuConfig.maintenance === 'true' ? true : false || false; // site maintenance?

const port = process.env.PORT || 3000;

exports.configs = {
  herokuConfig,
  maintenance,
  port,
};
