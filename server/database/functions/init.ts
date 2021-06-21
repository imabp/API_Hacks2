import { Deta } from "deta";
import * as dotenv from 'dotenv'
dotenv.config();
import endpoint from './../../env.config'

export default function initDatabase(){
return Deta(endpoint.projectKey); // configure your Deta project
}