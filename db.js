const Mysql = require('mysql');
var MysqlClient = Mysql.createConnection({
host     : '192.168.1.112',
user     : 'user',
password : 'root',
database : 'dwp'})
exports.connection= function () {

  var MysqlClient = Mysql.createConnection({
  host     : '192.168.1.112',//
  user     : 'user',
  password : 'root',
  database : 'dwp'
});
return  MysqlClient.connect();
}
exports.get = function () {
  return MysqlClient;
}
exports.options = {
  host     : '192.168.1.112',
  user     : 'user',
  password : 'root',
  database : 'dwp'
};
