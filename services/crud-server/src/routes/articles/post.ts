
import { ArticleModel } from '../../models/article';
import { IArticle } from '../../models/article';

export function post( app:any ){

    app.post("/article", async ( request:any, response:any ) => {

        // read payload from post body
        const payload:IArticle = request.body;

        const articleToCreate = await ArticleModel.create({
            userId:1,
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
