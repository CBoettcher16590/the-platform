const { config } = require('@fortawesome/fontawesome-svg-core');
var mysql      = require('mysql');

var pool = mysql.createPool(config);


const config = {
  host     : '3306',
  user     : 'admin',
  password : 'stargazer2020',
  database : 'theplatform'
}
  module.exports = pool;