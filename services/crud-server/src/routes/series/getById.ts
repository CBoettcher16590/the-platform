import { ISeries, SeriesModel } from "../../models/series";

export function getById(app: any) {

    app.get("/series/:id", async (request: any, response: any) => {

        const seriesID = request.params.id;
        const foundSeries = await SeriesModel.getById(seriesID);

        response.status(200).send(foundSeries[0]);

    });

}
