
const { stringify } = require('querystring'); 

module.exports = () => {
 
  const _bo = require('../bo/userBO');

  const controller = {};
  controller.allUsers  = (req, res) => _bo.all().then(r => res.status(200).json(r));

  controller.insert = (req, res) => {
    _bo
      .save(req.body)
      .then(r => res.status(200).json(r))
      .catch(e => res.status(500).json({status:
        {sucess: 'error',
         message:e }
    }));
  };   
  return controller;
}