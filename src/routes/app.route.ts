import { Application } from "express";
import { appController } from "@controllers";

export default (app: Application) => {
    app.use('/debug-sentry', appController.debug_sentry)
    app.use('/', appController.welcome);
}