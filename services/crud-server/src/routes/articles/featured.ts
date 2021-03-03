import { response } from 'express';
import {IArticle, ArticleModel} from '../../models/article';


export function feature( app:any ){

    app.patch('/article', async(request:any, response:any) => {
        const foundArticle = await ArticleModel.getById(request.body.article_id);    
        ArticleModel.addToFeatured(foundArticle);
    });
}
