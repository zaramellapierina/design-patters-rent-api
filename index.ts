import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { ApartmentDetailsInit } from './src/application/routesInit';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || '8080';


app.get('/', ApartmentDetailsInit());

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});