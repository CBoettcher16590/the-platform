
// import { MemberModel } from '../../models/members';
// import { IsignUp } from '../../interfaces';

// export function post( app:any ){

//     app.post("/users", ( request:any, response:any ) => {

//         // read payload from post body
//         const payload:IUser = request.body;

//         // hash password so we don't know what it is
//         // HASH PASSWORD WORK WITH SQL??
//         // payload.password = PasswordModel.hash(payload.password);

//         const members = MemberModel.getAll();
//         members.push(payload);
//         MemberModel.setAll(members);

//         // send successful response
//         response.status(201).send();

//     });

// }