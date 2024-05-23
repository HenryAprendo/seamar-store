import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Token } from '../interface/token.model';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { API_URL } from '../../constant/constant';
import { BrowserStorageService } from '../../services/browser-storage.service';
import { TOKEN } from '../../config/storage';
import { HandleErrorService } from '../../services/handle-error.service';
import { Profile } from '../interface/profile.model';
import { contextAuthIntercept } from '../../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private storage = inject(BrowserStorageService);

  private handle = inject(HandleErrorService);

  private apiUrl = `${API_URL}/auth`;

  userProfileObs = new BehaviorSubject<Profile|null>(null);

  profile$ = this.userProfileObs.asObservable();

  login(email:string, password:string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`,{ email, password })
      .pipe(
        tap(response => this.storage.set(TOKEN, response.access_token)),
        catchError(this.handle.handleErr()),
      )
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profile`,{
      context: contextAuthIntercept(),
    }).pipe(
      tap(userProfile => this.emit(userProfile)),
      catchError(this.handle.handleErr()),
    )
  }

  logout() {
    this.storage.remove(TOKEN);
    this.emit(null);
  }

  private emit(value:Profile|null) {
    this.userProfileObs.next(value);
  }

}
