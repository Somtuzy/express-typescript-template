import { AppError } from "./error.service";

export class AppService {
    debug_sentry() {
        throw new AppError("App Error:::", "My Sentry error!", 500)
    }
}

export default new AppService()