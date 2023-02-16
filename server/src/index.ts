import { Environment } from "./config/environment";
import server from "./server/app";
import { logger } from "./helpers/logger";
import { Application } from "express";
import { config } from "./config/config";
Environment.setup();

async function startServer() {
  const app: Application = await server.server();
  app.listen(config.SERVER_PORT, () => {
    logger.info(
      `Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`
    );
  });
}

startServer();

process.on("uncaughtException", (e) => {
  logger.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  logger.log(e);
  process.exit(1);
});
