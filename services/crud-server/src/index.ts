import express from "express";
import cors from 'cors';


import * as Members from './routes/members';

const app = express();
const port = 3307;

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

app.listen(port, () => {
    console.log(`Web Server Started and listening on localhost:${port}`);
});