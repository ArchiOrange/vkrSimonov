var MySql = require('../db');
MySql.connection();
// exports.insertDataUser = function (name,password,cb) {
// var sqlString = "INSERT INTO users (login, password)VALUES('"+name+"','"+password+"')" ;
// MySql.get().query(sqlString, function (err, result) {
//   cb(err,result);
// })
//
// }
// exports.getPersonalData = function (login,cb) {
//     var sqlString = "SELECT * FROM users WHERE login = '"+ login+"'";
//     MySql.get().query(sqlString, function (err,result) {
//   cb(err,result);
//     })
//
// }
// exports.readingMessages = function (id,idRoom,cb) {
//   let sql = "UPDATE message SET status = '1' WHERE status = '0' and id_room = '"+idRoom+"' and sender != '"+id+"'"
//   MySql.get().query(sql, function (err,result) {
//     cb(err,result);
//   })
//
// }
exports.getAllSubjects  = (cb) => {
  let sql = `SELECT * FROM subjects`
  MySql.get().query(sql,(err,result) => {
    cb(result)
  })
};
exports.addSubject  = (name,hours,cb) => {
  let sql = `INSERT INTO dwp.subjects (name,hours) VALUES ('${name}','${hours}')`;
  MySql.get().query(sql,(err,result) => {
    cb(result)
  })
};
exports.updateSubject  = (id,hours,cb) => {
  let sql = `UPDATE dwp.subjects SET hours='${hours}' WHERE id='${id}'`;
  MySql.get().query(sql,(err,result) => {
    cb(result)
  })
};
