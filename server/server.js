import app from './app';
import { logger } from './config/winston';
import mongoose from "mongoose";
import config from "./config";

const { MONGO_URI } = config;

mongoose
    .connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => logger.info('MongoDB connecting Success!!'))
    .catch((e) => logger.error('MongoDB Error'));

app.listen(7000, () => {
    logger.info('Server listening on port 3000');
});

app.get('/', (req, res) => {
    logger.info('GET /');
    res.sendStatus(200);
});

app.get('/error', (req, res) => {
    logger.error('Error message');
    res.sendStatus(500);
});
