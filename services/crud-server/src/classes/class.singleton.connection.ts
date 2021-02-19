var mysql = require('mysql');

import * as dotenv from 'dotenv';
dotenv.config();


//maybe add close connection after a certain time... timer. based close connection. Or time out..
//asyncs break on fat processes
export class singletonCONNECTION {

    private static instance:singletonCONNECTION|null;

    public connection:any;


    public static getInstance(){

        if( singletonCONNECTION.instance == null){
            this.instance = new singletonCONNECTION();
        }
        return singletonCONNECTION.instance
    }

    private constructor( ){
        //removed the if clause. Because no reason to do a double check.
        //if it's null in the above get instance, it's likely going to be null on this check 😆
            this.connection = mysql.createConnection({
        
                host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
                user     : 'admin',
                password : process.env.DATABASE_PASSWORD, //protect password, put in an env 😏
                database : 'theplatformV2'
        
                });
                  
    }
}
