const maintenance = process.env.maintenance || true; // site maintenance?
const port = process.env.PORT || 3000;

exports.configs = {
                    maintenance,
                    port
                  }