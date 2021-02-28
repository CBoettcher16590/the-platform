import { resolve } from "path";
import { Url } from "url";
import { IUser } from "./user";



var mysql = require('mysql');
var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatformV2'
});


export  const userProfile = {

    updateUserInfo: async (user:IUser):Promise<IUser[]>  => {

        return new Promise((resolve,reject)=>{
           
            connection.query(`UPDATE theplatformV2.user ;
                
            SET first_name = ${user.fName}, last_name = ${user.lName}, email = ${user.email}, bio = ${user.bio}, 
            user_image_link = ${user.imgLink}, user_BD = ${user.userDB}, phone_number = ${user.phoneNumber} WHERE user_id = ${user.userId}`, function (error:any, results:IUser[]) {
                if(error){
                    reject(error);
                } else {
                    resolve(results)
                }

            });
        });          
    
 },
};