import { SubscriptionModel } from '../../models/subscription'
import { IUser } from '../../models/user';

enum PatchType {
    Monthly = 'M',
    Yearly = 'Y',
}


export function patch(app: any) {

    app.patch('/subscription', async (request: any, response: any) => {
        const headerCode = request.headers.code;
        const userID = request.headers.userid;

        switch (headerCode) {

            case PatchType.Monthly: {
                SubscriptionModel.editSubscriptionMonthly(userID);
                break;
            }

            case PatchType.Yearly: {
                SubscriptionModel.editSubscriptionAnnualy(userID);
                break;
            }

            default: {
                console.error("No Patch code by that Name");
                break;
            }

        }

    });

}
