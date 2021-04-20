import { SeriesModel } from '../../models/series';
import {authenticateToken} from '../../middleware/authenticator'

interface ISubmittedSeries {
    title:string,
    imageLink:string,
    contents:string,
    userId:string
}


export function post( app:any ){

    app.post("/series",authenticateToken, async ( request:any, response:any ) => {

        // read payload from post body
        const payload:ISubmittedSeries = request.body;


       await SeriesModel.create({
            userId:payload.userId,
            title: payload.title,          
            contents: payload.contents,
            imageLink: payload.imageLink,

        });

        response.status(201).send();

    });

}
