import {
  HttpEventType,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { of, tap } from 'rxjs';

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET') {
    return next(req);
  }

  const cachedResponse = sessionStorage.getItem(req.url);

  return cachedResponse
    ? of(new HttpResponse({ status: 200, body: JSON.parse(cachedResponse) }))
    : next(req).pipe(
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            sessionStorage.setItem(req.url, JSON.stringify(event.body));
          }
        })
      );
};
