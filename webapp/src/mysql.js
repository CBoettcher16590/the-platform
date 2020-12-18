
// var mysql      = require('mysql');
// export var connection = mysql.createConnection({
//   host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
//   user     : 'admin',
//   password : 'stargazer2020',
//   database : 'theplatform'
// });
 
// connection.connect();
 
// connection.query('SELECT * FROM member', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
 
// connection.end();

// export function dbSignIn(email){

//   connection.connect();
 
//   const email = connection.query(`SELECT Email FROM member`, function (error, results, fields) {
  
//   connection.end();

//   return email;
// }