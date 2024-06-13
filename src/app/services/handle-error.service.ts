import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  handleErr() {

    let msg = {
      unauthorized: 'Unauthorized user. Check if your email or password is correct.',   //Usuario no autenticado.
      notFound: 'Resource not found.',
      forbidden: 'Forbidden resource',   //Recurso prohibido por ejemplo cuando el rol del usuario no tiene permisos.
      general: 'Oops a problem has occurred. The page is not available.'  //Cuando por ejemplo no se conecta al servidor.
    }

    return (error:HttpErrorResponse) => {

      switch(error.status) {

        case HttpStatusCode.Unauthorized :
          return this.throwErr(msg.unauthorized);

        case HttpStatusCode.NotFound :
          return this.throwErr(msg.notFound);

        case HttpStatusCode.Forbidden :
          return this.throwErr(msg.forbidden);

        default:
          return this.throwErr(msg.general);

      }

    }
  }

  private throwErr(msg:string){
    return throwError(() => new Error(msg));
  }

}
