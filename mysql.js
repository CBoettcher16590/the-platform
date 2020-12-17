var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '3306',
  user     : 'admin',
  password : 'stargazer2020',
  database : 'theplatform'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = connection;