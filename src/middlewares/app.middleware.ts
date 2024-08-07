import { Application } from "express";
import error from "./error.middleware";
import appRoute from "../routes/app.route";
import { Sentry } from "@configs";

const { setupExpressErrorHandler } = Sentry;

export default (app: Application) => {
    appRoute(app)
    setupExpressErrorHandler(app);
    app.use(error);
}