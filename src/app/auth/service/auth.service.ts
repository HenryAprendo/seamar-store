import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Token } from '../interface/token.model';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { API_URL } from '../../constant/constant';
import { BrowserStorageService } from '../../services/browser-storage.service';
import { TOKEN } from '../../config/storage';
import { HandleErrorService } from '../../services/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private storage = inject(BrowserStorageService);

  private handle = inject(HandleErrorService);

  private apiUrl = `${API_URL}/auth`;

  login(email:string, password:string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`,{ email, password })
      .pipe(
        tap(response => this.storage.set(TOKEN, response.access_token)),
        catchError(this.handle.handleErr()),
      )
  }


}
