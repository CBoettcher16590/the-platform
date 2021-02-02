
import { ArticleModel } from '../../models/article';
import {authenticateToken} from '../../middleware/authenticator'
import { IArticle } from '../../models/article';


interface ISubmittedArticle {

}

export function post( app:any ){

    app.post("/article",authenticateToken, async ( request:any, response:any ) => {

        // read payload from post body
        const payload = request.body;

        console.log(payload);

        const articleToCreate = await ArticleModel.create({
            userId:2,
            title: payload.title,
            articleId: payload.articleId,
            price: payload.price,
            preview: payload.preview,
            createdOn: payload.createdOn,
            contents: payload.contents,
            imageLink: payload.imageLink,
            rating: payload.rating,
            seriesId: 1,
            articleStatus:1
        });

        response.status(201).send(articleToCreate);

    });

}
