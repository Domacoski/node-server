module.exports = () => {
  const data = require('../data/userSqlite');
  const controller = {};
  controller.allUsers  = (req, res) => 
      data.all().then(r => res.status(200).json(r));
  return controller;
}