import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withXsrfConfiguration} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withXsrfConfiguration({
    cookieName: 'INTEROP_CUSTOM_APP_TOKEN',
    headerName: 'Interop Custom App token',
  }))]
};
