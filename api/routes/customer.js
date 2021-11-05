module.exports = app => {
  const userController = require('../controllers/userController')();
  app.route('/api/v1/user')
     .get(userController.allUsers);
}