import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import environment from "./environment.config";

const { httpIntegration, rewriteFramesIntegration } = Sentry

Sentry.init({
  dsn: environment.sentry.dsn,
  environment: environment.node_env,
  integrations: [
      httpIntegration({}),
      rewriteFramesIntegration({
          root: global.__dirname,
      }),
      nodeProfilingIntegration()
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0
});

export default Sentry;