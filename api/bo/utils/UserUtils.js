const { status } = require('../../entities/Status');

const isValidTxt = value => (value!="" && value != undefined);

exports.validateUser = function(user){
    if(!user){
        return status(0, "User is null.");
    }else{
        if(!isValidTxt(user.name)){
            return status(0, "User.name invalid");
        }
        if(!isValidTxt(user.login)){
            return status(0, "User.login invalid");
        }
        if(!isValidTxt(user.pass)){
            return status(0, "User.pass invalid");
        }
        return status(1);
    }
}

