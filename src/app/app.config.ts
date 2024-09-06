import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { cachingInterceptor } from './core/interceptors/caching.interceptor';
import { encodingUTF8Interceptor } from './core/interceptors/encodingUTF8.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([encodingUTF8Interceptor, cachingInterceptor])
    ),
    provideAnimationsAsync(),
  ],
};
