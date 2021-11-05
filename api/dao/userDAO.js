var sqlite3 = require("sqlite3").verbose();
const file = "./data_base/users.db";
const INSERT = 'create table if not exists user (id integer primary key, name text NOT NULL, login text NOT NULL, pass text NOT NULL)';

const db = new sqlite3.Database(file, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  db.run(INSERT, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    db.close(); 
  });
});

exports.all = function (){
  const promise = new Promise( (resolve, reject) => {  
    var db = new sqlite3.Database(file);   
    var row = db.all('select * from user', 
    function(error, rows){
      if (error) {
        db.close();
        reject(error); 
      }
      db.close();
      resolve(rows);   
    });
   
  });
  return promise;
};
exports.save = function (login, pass, name){
  const promise = new Promise( (resolve, reject) => {  
    var db = new sqlite3.Database(file);  
    db.run("INSERT INTO user (login, pass, name) VALUES (?,?,?)", 
          [login, pass, name], 
          function(error){
            if (error) {
              db.close();
              reject(error); 
            }
            db.close();
            resolve(this.lastID);
    });
  });
  return promise;
};