 
const { status } = require('../entities/Status');
const { validateUser } = require('../bo/utils/UserUtils');

exports.save = function(user){
    return  new Promise((resolve, reject) => {
        let valid = validateUser(user);
        if(valid.sucess){
            require('../dao/userDAO')
             .save(user.login, user.pass, user.name)
             .then(r => { 
                resolve( {
                          user:{id:r, login:user.login, name: user.name}, 
                          status:status(1)
                        } );
             }).catch(e => { reject(e) });
        }else{
            reject(valid.message);
        }
    });
};
exports.all = function(){
    return new Promise((resolve, reject) => require('../dao/userDAO')
             .all()
             .then(r => resolve(r))
             .catch(e => reject(e)));
};