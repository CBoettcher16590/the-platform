  
import { article } from "../routes/articles";
import { IUser } from "./user";
import {singletonCONNECTION } from "../classes/class.singleton.connection"


export interface ISubmittedArticle{
    
    seriesId: number;
    userId:number;
    title:string;
    preview:string;
    contents:string;
    image_link:string;
    price:number;
    article_status:number;
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





export const ArticleModel = {

    getAll: async ():Promise<IArticle[]>  => {

        return new Promise((resolve,reject) => {

                const db:any = singletonCONNECTION.getInstance();

                var sql = `SELECT * FROM theplatformV2.article`;
                            
                db.connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results);
                    }  
            }); 
        });
     },

    getById: async (articleId:number):Promise<IArticle> => {

        return new Promise((resolve,reject)=>{
            
            const db:any = singletonCONNECTION.getInstance();
            
            var sql = `SELECT * FROM theplatformV2.article WHERE article_id = ${articleId}`;
            
                db.connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results[0]);
                    }
           
                });
            });        
    },

    addToPurchased:  async (article:IArticle, user:IUser) => { //needs to be double checked

        return new Promise((resolve,reject)=>{

            const db:any = singletonCONNECTION.getInstance();

            var sql = `INSERT INTO theplatformV2.article_has_user (articleID, userID) VALUES("${article.article_id}", "${user.user_id}");`;
                db.connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                    } else {
                        resolve(results[0]);
                    }
                });
            });         
    },

    create: async( articleToCreate:ISubmittedArticle)=> {
        
        return new Promise((resolve,reject)=>{;
            
            const db:any = singletonCONNECTION.getInstance();
            
            var sql = `INSERT INTO article VALUES (article_id, 2, ${articleToCreate.userId}, "${articleToCreate.title}", "${articleToCreate.preview}", "${articleToCreate.contents}", "${articleToCreate.image_link}", CURDATE(), "${articleToCreate.price}", ${articleToCreate.article_status}, 0)`;
                db.connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0]);
                        console.log("results in Article Create Model: ", results)
                    }
                });
            });      
    },

    approveArticle: async ( article:IArticle)=> {

        return new Promise((resolve,reject)=>{
            
            const db:any = singletonCONNECTION.getInstance();
            
            var sql = `UPDATE article SET article_status = 3 WHERE article_id = ${article.article_id};`;
                db.connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0]);
                        console.log("approved Article worked")
                    }
                });
            });    
    },

    rejectArticle: async ( article:IArticle)=> {

        return new Promise((resolve,reject)=>{

            const db:any = singletonCONNECTION.getInstance();

            var sql = `UPDATE article SET article_status = 4 WHERE article_id = ${article.article_id};`;
                db.connection.query(sql , function (error:any, results:IArticle[]) {
                    if(error){
                        reject(error);
                        console.log("Error in Create Article Model: ", error);
                    } else {
                        resolve(results[0])
                        console.log("Rejected Article worked")
                    }
                });
            });        
    }
}