import dotenv from 'dotenv';
dotenv.config();
var mysql = require('mysql');

export default class DatabaseCONNECTION {

    private static instance: DatabaseCONNECTION | null
    //connection is readonly becuase we dont want anybody to be able to mess with it
    readonly connection: any;

    constructor() {

        //check to see if there is an instance when new is called 
        if (DatabaseCONNECTION.instance) {
            //and returns the instance if there is one
            return DatabaseCONNECTION.instance;

            //if not, then we assign this connection to the private, connection property
        } else {
            this.connection = mysql.createPool({
                max_connections: 512,
                host: process.env.SQL_CONNECTION_HOST,
                user: process.env.SQL_CONNECTION_USER,
                password: process.env.SQL_CONNECTION_PASSWORD,
                database: process.env.SQL_CONNECTION_DATABASE
            });
            DatabaseCONNECTION.instance = this
        }
    }

    public connect() {

        //this method will now return the connection, which is crated when the class is created
        return this.connection
    }

}