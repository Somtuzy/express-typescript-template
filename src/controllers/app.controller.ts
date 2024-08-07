import { appService } from "@services";
import { TController } from "@interfaces";

export class AppController {
    welcome: TController = (req, res) => res.status(200).send("Welcome to Sentry Avenue!")

    debug_sentry: TController = (req, res) => {
        appService.debug_sentry()

        return res.status(200).json({
            message: "App is healthy",
            success: true
        })
    }
}

export default new AppController()