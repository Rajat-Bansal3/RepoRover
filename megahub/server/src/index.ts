import express from "express";
import env from "./env";
import cookie from "cookie-parser";
import loggingMiddleware from "./middleware/loggingMiddleware";
import { authRouter, hubRouter } from "./routes";
import productionConfig from "./lib/productionConfig";
import cors from "cors";
import helmet from "helmet";
import logger from "./lib/logger";
import { connect } from "./lib/db";

connect();
const app = express();
app.use(express.json());
app.use(cookie());
app.use(express.urlencoded());
app.use(cors(productionConfig.corsOptions));
app.use(helmet(productionConfig.helmetOptions));

app.use(loggingMiddleware);
app.use("/auth", authRouter);
app.use("/hub", hubRouter);

app.listen(env.PORT, () => {
  logger.info(`Server running on http://localhost:${env.PORT}`);
});
