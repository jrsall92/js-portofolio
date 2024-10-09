import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideZoneChangeDetection, SecurityContext} from '@angular/core';
import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import {provideMarkdown} from 'ngx-markdown';

export const appConfig = [
  provideRouter(routes),
  provideZoneChangeDetection({eventCoalescing: true}),
  provideHttpClient(withFetch()),
  provideMarkdown({loader: HttpClient, sanitize: SecurityContext.NONE})
  // add other providers here
];
