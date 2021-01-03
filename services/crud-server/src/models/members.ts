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
 getByEmail:(user:IsignUp):IsignUp => {
    connection.connect();
        const userEmail = JSON.stringify(user.email);
        const foundUser = connection.query(`SELECT * FROM member WHERE email = "${userEmail}" `, function (error:any, results:any, fields:any) {
            if (error) throw error;
            return results;
        });
    connection.end();
    return foundUser;

 },
 create: (newUser:IsignUp):IsignUp => {
    connection.connect();
    
        const CreatedMember = connection.query(`INSERT INTO member VALUES(idmember, ${newUser.Fname},${newUser.Lname},
                ${newUser.email},${newUser.phoneNumber},${newUser.password})`, function (error:any, results:any, fields:any) {
            if (error) throw error;
            return results;
        });
    connection.end();
    
    return CreatedMember;
    }

  
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