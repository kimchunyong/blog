import app from './app';
import { logger } from './config/winston';

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
