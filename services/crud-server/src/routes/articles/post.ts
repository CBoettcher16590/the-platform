
import { ArticleModel } from '../../models/article';
import {authenticateToken} from '../../middleware/authenticator'
import { IArticle } from '../../models/article';

interface ISubmittedArticle {
    title:string,
    preview:string,
    imageLink:string,
    contents:string,
    price:number
}

export function post( app:any ){

    app.post("/article",authenticateToken, async ( request:any, response:any ) => {

        // read payload from post body
        const payload:ISubmittedArticle = request.body;

    console.log("article Post:")
       await ArticleModel.create({
            userId:2,
            title: payload.title,  
            price: payload.price,
            preview: payload.preview,         
            contents: payload.contents,
            image_link: payload.imageLink,
            seriesId: 1,
            article_status:1
        });

        response.status(201).send();

    });

}
