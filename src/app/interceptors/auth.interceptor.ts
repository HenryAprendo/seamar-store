import { HttpContext, HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { BrowserStorageService } from '../services/browser-storage.service';
import { inject } from '@angular/core';
import { TOKEN } from '../config/storage';

const AUTH_CONTEXT = new HttpContextToken<boolean>(() => false);

export const contextAuthIntercept = () => {
  return new HttpContext().set(AUTH_CONTEXT,true);
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const storage = inject(BrowserStorageService);

  if(req.context.get(AUTH_CONTEXT)) {

    const authToken = storage.get(TOKEN);

    if(authToken){
      const authReq = req.clone({
        headers: req.headers.set('Authorization',`Bearer ${authToken}`),
        // setHeaders: { Authorization: authToken } otra forma
      })
      return next(authReq);
    }

  }

  return next(req);

};
