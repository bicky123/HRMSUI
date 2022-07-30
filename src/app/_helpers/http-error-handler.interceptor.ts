import { Injectable } from '@angular/core';
import { retryWhen, concatMap, catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorCode } from '../enums/error-code';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(retryWhen(error => this.retryRequest(error, 3)),
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.setError(error);
          this.toastr.error(errorMessage, "Error");
          return throwError(errorMessage);
        }));
  }

  retryRequest(error: Observable<any>, retryCount: number): Observable<unknown> {
    return error.pipe(
      concatMap((checkErr: HttpErrorResponse, count: number) => {
        if (count <= retryCount) {
          switch (checkErr.status) {
            case ErrorCode.serverDown:
              return of(checkErr)
          }
        }
        return throwError(checkErr);
      })
    );
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error occured';
    if (error.error instanceof ErrorEvent)
      errorMessage = error.error.message;
    else {
      if (error.status === 0)
        return error.error.errorMessage;

      if (error.error.errorMessage && error.status !== 0)
        errorMessage = error.error.errorMessage;
    }
    return errorMessage;
  }

}
