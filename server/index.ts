import express from "express";
import * as dotenv from 'dotenv'
dotenv.config();
import endpoint from './env.config'
import {initDatabase,createDatabase} from './database/functions'

const app = express();
const port = endpoint.port



const detaDB = initDatabase();
const db = createDatabase(detaDB,"registrations");
const visitors = createDatabase(detaDB,"visitors");
// define a route handler for the default home page

app.get( "/", ( req, res ) => {
    const visitor={
        ip:req.ip,
        ips:req.ips
    }
    visitors.put(visitor)
    res.send( `Thank you for visiting API Hacks Server \n Your IP is: ${visitor.ip} \n and are you using proxy ${visitor.ips?"Yes":"No"}` );
} );




// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});

