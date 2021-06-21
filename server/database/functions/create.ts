
import Deta from 'deta/dist/types/deta';
import * as dotenv from 'dotenv'
dotenv.config();
 // configure your Deta project

export default function createDatabase(deta:Deta, name:string){
return deta.Base(name);
}