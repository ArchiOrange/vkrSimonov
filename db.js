const Mysql = require('mysql');
var MysqlClient = Mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : 'fcirk00',
database : 'dwp'})
exports.connection= function () {

  var MysqlClient = Mysql.createConnection({
  host     : 'localhost',//
  user     : 'root',
  password : 'fcirk00',
  database : 'dwp'
});
return  MysqlClient.connect();
}
exports.get = function () {
  return MysqlClient;
}
exports.options = {
  host     : 'localhost',
  user     : 'root',
  password : 'fcirk00',
  database : 'dwp'
};
