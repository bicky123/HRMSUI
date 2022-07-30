import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.url;
    const token = this.authService.getUserToken() || '';
    request = request.clone({
      setHeaders: {
        'hrms-key': environment.apiKey,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      url: environment.baseApiUrl + url
    });
    return next.handle(request);
  }
}
