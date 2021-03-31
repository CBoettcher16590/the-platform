import { authenticateToken } from "../../middleware/authenticator";
import { SerieseModel } from "../../models/series";

interface ISubmittedSeries{
    series_title:string,
    series_image:string,
    series_description:string,
    userId:string
}

export function post( app:any ){

    app.post("/series",authenticateToken, async ( request:any, response:any ) => {

        // read payload from post body
        const payload:ISubmittedSeries = request.body;


       await SerieseModel.create({
        series_title: payload.series_title,
        series_image: payload.series_image,
        series_description: payload.series_description,
        userId: payload.userId
        });

        response.status(201).send();

    });

}