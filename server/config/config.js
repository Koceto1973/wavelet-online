const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development'; // production takes precedence if any

let maintenance = true;

if (env !== 'development') {
  maintenance = process.env.maintenance;
} else {
  maintenance = false;
}

// maintenance = true; // set maintenance from code

exports.configs = {
  maintenance,
  port,
};
