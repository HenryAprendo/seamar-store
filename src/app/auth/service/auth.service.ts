import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../interface/token.model';
import { Observable, tap } from 'rxjs';
import { API_URL } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = `${API_URL}/auth`;

  login(email:string, password:string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`,{ email, password })
      .pipe(
        tap(response => console.log(response.access_token))
      )
  }


}
