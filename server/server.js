import app from "./app";
import { logger } from "./config/winston";

import config from "./config/index";
const { PORT } = config;

app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
});

