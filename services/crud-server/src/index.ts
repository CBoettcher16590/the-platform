import express from "express";
import cors from 'cors';


import * as Members from './routes/members';
import * as Articles from './routes/articles'

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

[ Members ].forEach( ImportedObject => {
    
    Object.values( ImportedObject ).forEach( loadEndpoints );

});

[ Articles ].forEach( ImportedObject => {
    
    Object.values( ImportedObject ).forEach( loadEndpoints );

});

app.listen(port, () => {
    console.log(`Web Server Started and listening on localhost:${port}`);
});