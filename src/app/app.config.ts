import { ApplicationConfig } from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import routes from '@app/app.routes';
import provideCore from '@app/pages/core';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      inMemoryScrollingFeature,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideCore(),
  ],
};
export default appConfig;
