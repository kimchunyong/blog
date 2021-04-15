import express from "express";
import mongoose from "mongoose";
import config from "./config";

import { logger } from './config/winston';

import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";

import postsRoutes from './routes/api/post';
import usersRoutes from './routes/api/user';

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(express.json());

mongoose
    .connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => logger.info('MongoDB connecting Success!!'))
    .catch((e) => logger.error('MongoDB Error'));

app.get('/', (req, res) => {
    logger.info('GET /');
    res.sendStatus(200);
});
app.use('/api/post', postsRoutes);
app.use('/api/user', usersRoutes);

app.get('/error', (req, res) => {
    logger.error('Error message');
    res.sendStatus(500);
});

export default app;
