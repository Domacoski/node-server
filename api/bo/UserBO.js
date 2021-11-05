const { status } = require('../entities/Status');
const { validateUser } = require('./utils/UserUtils');

exports.byId = function(id){
    return new Promise((resolve, reject) => {
        require('../dao/UserDAO')
            .byId(id)
            .then(r => resolve(
                {
                    status:status(1),
                    user:{
                        id: r.id, 
                        login: r.login, 
                        name: r.name
                    } 
                }
            ))
            .catch(e => reject(e));
    });
};

exports.save = function(user){
    return new Promise((resolve, reject) => {
        let valid = validateUser(user);
        if(valid.sucess){
            require('../dao/UserDAO')
             .save(user.login, user.pass, user.name)
             .then(r => { 
                resolve( {
                    status:status(1),
                    user:{
                            id: r, 
                            login: user.login, 
                            name: user.name
                        }
                  } );
             }).catch(e => { reject(e) });
        }else{
            reject(valid.message);
        }
    });
};

exports.all = function(){
    return new Promise((resolve, reject) => require('../dao/UserDAO')
             .all()
             .then(r => resolve({
                 status: status(1),
                 data: r
                }))
             .catch(e => reject(e)));
};