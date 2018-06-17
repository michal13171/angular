import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {
private token = sessionStorage.getItem('JWT');
constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const tokenizer = req.clone({
      setHeaders: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${this.token}`
      }
    });
    return next.handle(tokenizer);
  }
}
