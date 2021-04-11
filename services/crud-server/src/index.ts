import express from "express";
import cors from 'cors';

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


app.listen(port, () => {
    console.log(`Web Server Started and listening on localhost:${port}`);
});