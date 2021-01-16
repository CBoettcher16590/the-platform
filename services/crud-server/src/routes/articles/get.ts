

import {ArticleModel, IArticle } from '../../models/article';


export function get( app:any ){

    app.get("/article", async ( request:any, response:any ) => {

        const articleList:IArticle[] = await ArticleModel.getAll();
        response.status(200).send(articleList);
    });

}