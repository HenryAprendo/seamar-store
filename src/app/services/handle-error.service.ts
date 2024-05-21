import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  handleErr() {

    let msg = {
      unauthorized: 'Unauthorized user. Check if your email or password is correct.',
      notFound: 'Resource not found.',
      general: 'Oops a problem has occurred.'
    }

    return (error:HttpErrorResponse) => {
      if(error.status === HttpStatusCode.Unauthorized) {
        return throwError(this.error(msg.unauthorized));
      } else if(error.status === HttpStatusCode.NotFound) {
        return throwError(this.error(msg.notFound));
      } else  {
        return throwError(this.error(msg.general));
      }
    }
  }

  private error(msg:string){
    return () => new Error(msg);
  }

}
