import dotenv from 'dotenv';
dotenv.config();

export default class DatabaseCONNECTION{

    private static instance:DatabaseCONNECTION

    constructor(){
        if(DatabaseCONNECTION.instance = null){
            return new DatabaseCONNECTION();
        }
        return DatabaseCONNECTION.instance;
    }

    public connect(){
        var mysql = require('mysql');
        return mysql.createConnection({
            host: process.env.SQL_CONNECTION_HOST,
            user:process.env.SQL_CONNECTION_USER,
            password:process.env.SQL_CONNECTION_PASSWORD,
            database:process.env.SQL_CONNECTION_DATABASE
        });
    }

}