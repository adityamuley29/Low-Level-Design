import { Logger } from "./logger";

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.info("Server started...");
logger2.error("Failed to connect to DB!");

// Both will be same instance
console.log(logger1 === logger2); //true
