require('dotenv').config();

const envVars = process.env;

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  serverPort: envVars.SERVER_PORT,
  apiService: envVars.API_SERVICE
};

export default config;