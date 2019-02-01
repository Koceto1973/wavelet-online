const port = process.env.PORT || 3000;

let maintenance = true;

if (process.env.NODE_ENV === 'production') {
  maintenance = process.env.maintenance;
} else {
  maintenance = false;
}

// maintenance = true; // set maintenance from code

exports.configs = {
  maintenance,
  port,
};
