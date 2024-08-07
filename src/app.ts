import appMiddleware from "./middlewares/app.middleware";
import db from "@configs/db.config";
import express from "express";

const app = express();
appMiddleware(app)

export default app;