const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));
  app.set('content-type', 'application/json');

  // MIDDLEWARES
  app.use(bodyParser.json());
  require('../api/routes/customer')(app);

  return app;
};