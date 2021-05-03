import {SubscriptionModel} from '../../models/subscription'
import { IUser} from '../../models/user';

enum PatchType {
    Monthly = 'M',
    Yearly = 'Y',
}


export function patch(app:any){

    app.patch('/subscription', async(request:any, response:any) => {
        const headerCode = request.headers.code;
        console.log(request);
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ')

    
        
    switch(headerCode){
        
        case PatchType.Monthly:{
            SubscriptionModel.editSubscriptionMonthly(request.body);
            break;
        }

        case PatchType.Yearly:{
            SubscriptionModel.editSubscriptionAnnualy(request.body);
            break;
        }
        
       default:{
           console.error("No Patch code by that Name");
        break;
        }
           
    }

    });

}
