
const { stringify } = require('querystring'); 

module.exports = () => {
  const _bo = require('../bo/UserBO');
  const controller = {};
  controller.allUsers  = (req, res) => _bo.all().then(r => res.status(200).json(r))
    .catch(e=>res.status(500).json({
      status:
      {
        sucess: '0',
        message:e 
      }
    }
    ));

  controller.insert = (req, res) => {
    _bo
      .save(req.body)
      .then(r => res.status(200).json(r))
      .catch(e => res.status(500).json({status:
        {sucess: '0',
         message:e }
    }));
  };

  controller.byId = (req, res) => {
      _bo
      .byId(req.params.id)
      .then(r => res.status(200).json(r))
      .catch(e => res.status(500).json(
        {
          status:
          {
            sucess: '0',
            message:e 
          }
    }));
  };
  
  return controller;
};