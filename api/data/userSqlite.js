var sqlite3 = require("sqlite3").verbose();

const file = "./data_base/users.db";
const db = new sqlite3.Database(file, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  db.run('create table if not exists user (id integer primary key, name text NOT NULL, created_at DATETIME NOT NULL)', (error) => {
    if (error) {
      console.log(error);
      return;
    }
    db.close(); 
  });
});


exports.all = function (){
  const promise = new Promise( (resolve, reject) => { 
    console.log('select. . .'); 
    var db = new sqlite3.Database(file, sqlite3.OPEN_READWRITE);   
    var row = db.all('select * from user', function(error, rows){
      if (error) {
        reject(error); 
      }
      resolve(rows);   
    });
   
  });
  return promise;
};