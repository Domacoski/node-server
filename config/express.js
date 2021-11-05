const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();
  app.set('port', process.env.PORT || config.get('server.port'));
  app.set('content-type', 'application/json');
  app.use(bodyParser.json());
  require('../api/routes/Routes')(app);
  return app;
};