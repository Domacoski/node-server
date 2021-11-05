module.exports = app => {
  const userController = require('../controllers/UserController')();
  app
    .route('/api/v1/user')
    .get(userController.allUsers)
    .post(userController.insert);
    app
    .route('/api/v1/user/:id')
    .get(userController.byId);
};