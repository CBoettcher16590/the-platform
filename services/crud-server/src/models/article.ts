import { article } from "../routes/articles";
import { IUser } from "./user";


export interface ISubmittedArticle{
    
    seriesId: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    imageLink:string;
    price:number;
    articleStatus:number;
}

export interface IArticle{
    
    article_id: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    image_link:string;
    price:number;
    created_on:string;
    article_status:number;
    rating:number[];
}


var mysql = require('mysql');

var connection = mysql.createConnection({
     host     : 'db-stargazer.cd4ztxxcuiwb.us-east-1.rds.amazonaws.com',
     user     : 'admin',
     password : 'stargazer2020',
    database : 'theplatformV2'
});

export const ArticleModel = {

    getAll: async ():Promise<IArticle[]>  => {

        return new Promise((resolve,reject) => {
        
                var sql = `SELECT * FROM theplatformV2.article`;
                            
                connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results)
                    }  
            }); 
        });
     },

    getById: async (articleId:number):Promise<IArticle> => {

        return new Promise((resolve,reject)=>{
            connection.connect(function (err:any){
    
                if(err) throw err;
            var sql = `SELECT * FROM theplatformV2.article WHERE article_id = ${articleId}`;
            
                    connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results[0])
                    }
           
                });
            });
        });          
    },

    addToPurchased:  async (article:IArticle, user:IUser) => { //needs to be double checked

        return new Promise((resolve,reject)=>{
            connection.connect(function (err:any){
    
            if(err) throw err;
            var sql = `INSERT INTO theplatformV2.article_has_user (articleID, userID) VALUES(${article.article_id}, ${user.userId});`;
                connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results[0])
                    }
                });
            });
        });          
    },

    create: async( articleToCreate:ISubmittedArticle)=> {
        
        return new Promise((resolve,reject)=>{
            connection.connect(function (err:any){
    
            if(err) throw err;
            var sql = `INSERT INTO article VALUES (article_id, 2, ${articleToCreate.userId}, "${articleToCreate.title}", "${articleToCreate.preview}", "${articleToCreate.contents}", "${articleToCreate.imageLink}", CURDATE(), "${articleToCreate.price}", ${articleToCreate.articleStatus}, 0)`;
                connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0])
                        console.log("results in Article Create Model: ", results)
                    }
                });
            });
        });      
    },

    approveArticle: async ( article:IArticle)=> {

        return new Promise((resolve,reject)=>{
            connection.connect(function (err:any){
    
            if(err) throw err;
            var sql = `UPDATE article SET article_status = 3 WHERE article_id = ${article.article_id};`;
                connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0])
                        console.log("approved Article worked")
                    }
                });
            });
        });         
    }
}