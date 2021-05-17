import { SubscriptionModel } from '../../models/subscription'
import { IUser } from '../../models/user';




export function get(app: any) {

    app.get("/subscription", async (request: any, response: any) => {

        const userList: IUser[] = await SubscriptionModel.getSubscription(request);
        response.status(200).send(userList);

    });


}