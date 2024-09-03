import {
  HttpEventType,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { of, tap } from 'rxjs';
import { UTF8, regexUTF8 } from '../constants/constants';

export const encodingUTF8Interceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('https://api.kinopoisk.dev/v1.4/movie')) {
    return next(req);
  }

  const query = req.urlWithParams.slice(req.url.indexOf('?'));

  const newQuery = query.replaceAll(regexUTF8, (match) => {
    console.log(UTF8[match]);
    return UTF8[match];
  });

  const newUrlWithParams = req.url.slice(0, req.url.indexOf('?')) + newQuery;

  const newReq = req.clone({ url: newUrlWithParams });

  return next(newReq);
};
