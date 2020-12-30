
import { ArticleModel } from '../../models/article';
import { IArticle } from '../../interfaces';

export function post( app:any ){

    app.post("/article", async ( request:any, response:any ) => {

        // read payload from post body
        const payload:IArticle = request.body;

        const articleList = ArticleModel.getAll();

        // articleList.push(payload);
        // ArticleModel.setAll(members);

        // send successful response
        response.status(201).send();

    });

}

// export function post( app:any ){

//     app.post("/tasks", authenticateToken, async (request:any, response:any) => {
    
//         const task = await TaskModel.create({
//             done: false,
//             description: request.body.description
//         });
    
//         response.status(201).send( task );
    
//     });

// }
