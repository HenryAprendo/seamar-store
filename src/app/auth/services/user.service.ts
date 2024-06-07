import { Injectable, inject } from '@angular/core';
import { User, CreateUserDto } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/constant';

@Injectable()
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/v1/user';

  constructor() { }

  save(data:CreateUserDto): Observable<User> {
    return this.http.post<User>(this.apiUrl, data);
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }


}
