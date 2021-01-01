
import { IArticle } from '../../../interfaces';
import {ArticleModel } from '../../../models/article';


export function get( app:any ){

    app.get("/article/:articleId", async ( request:any, response:any ) => {

        const articleId = request.params.articleId;
        const foundArticle:IArticle[] = await ArticleModel.getById(articleId)
        response.status(200).send(foundArticle);
    });

}