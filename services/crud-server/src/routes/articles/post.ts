
import { ArticleModel } from '../../models/article';
import {authenticateToken} from '../../middleware/authenticator'
import { IArticle } from '../../models/article';

interface ISubmittedArticle {
    title:string,
    preview:string,
    imageLink:string,
    contents:string,
    price:string,
    userId:string
}

export function post( app:any ){

    app.post("/article",authenticateToken, async ( request:any, response:any ) => {

        // read payload from post body
        const payload:ISubmittedArticle = request.body;

       await ArticleModel.create({
            userId:parseInt(payload.userId),
            title: payload.title,  
            preview: payload.preview,         
            contents: payload.contents,
            image_link: payload.imageLink,
            price: payload.price,
            seriesId: 1,
            article_status:1
        });

        response.status(201).send();

    });

}
