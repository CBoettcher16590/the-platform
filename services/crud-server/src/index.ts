import express from "express";
import cors from 'cors';

import * as User from './routes/users/user';
import * as Users from './routes/users';
import * as Articles from './routes/articles';
import * as Tokens from './routes/tokens';
import * as Series from './routes/series';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());


function loadEndpoints( endpoint:any ){
    
    if( typeof endpoint === "function" ){
        endpoint(app);
        return;
 }

 Object.values(endpoint).forEach(loadEndpoints);

}

[ Users, Tokens, Articles, Series ].forEach( ImportedObject => {
    
    Object.values( ImportedObject ).forEach( loadEndpoints );

});

<<<<<<< HEAD
[ User ].forEach( ImportedObject => {
    
    Object.values( ImportedObject ).forEach( loadEndpoints );

});

[ Tokens ].forEach( ImportedObject => {
    
    Object.values( ImportedObject ).forEach( loadEndpoints );

});

[ Articles ].forEach( ImportedObject => {
    
    Object.values( ImportedObject ).forEach( loadEndpoints );

});
=======
>>>>>>> a2625d188d1b90f5c93971c485daf11fe6d20a2d

app.listen(port, () => {     
    console.log(`Web Server Started and listening on localhost:${port}`);
});