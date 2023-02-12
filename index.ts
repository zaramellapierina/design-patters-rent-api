import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { ApartmentDetailsInit } from './src/application/routesInit';
import RentFilterController from './src/adapters/controller/RentFilterController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || '8080';

app.use(express.json());

app.get('/', ApartmentDetailsInit());
app.post('/filters', RentFilterController);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});