import { IsignUp } from "../interfaces";


var mysql = require('mysql');
export var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatform'
});

export const MemberModel = {

    getAll: ():IsignUp => {
    connection.connect();
    
 const query = connection.query('SELECT * FROM member', function (error:any, results:any, fields:any) {
       if (error) throw error;
       return results;
 });
 connection.end();
     const stringQuery = JSON.parse(query)
     return stringQuery;

 },
  
    // setAll: ( users:IsignUp[] ) => {
    //     fs.writeFileSync(file, JSON.stringify(users, null, 4), { encoding: 'utf-8' });
    // },

    // getByEmail: ( email:string ): IsignUp|undefined => {

    //     return MemberModel.getAll().find( user => {
    //         console.log(user, email);
    //         return user.email === email;
    //     });

    // }

}