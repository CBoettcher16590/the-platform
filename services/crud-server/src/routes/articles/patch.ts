import { response } from 'express';
import {IArticle, ArticleModel} from '../../models/article';


export function patch(app:any){

    app.patch('/article', async(request:any, response:any) => {

        const foundArticle = await ArticleModel.getById(request.body.article_id);
        //foundArticle is the article in the database, req.body is the article we passed in with the changed value of article status
        // console.log("PATCH ROUTE CRUD: ", foundArticle, request.body);

        if(request.body.article_status === 3){
            ArticleModel.approveArticle(foundArticle);
        }
        if(request.body.article_status === 4){
            ArticleModel.rejectArticle(foundArticle);
        }

    });

}