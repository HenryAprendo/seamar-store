import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants/constant';
import { Category, CreateCategoryDTO, UpdateCategoryDTO } from './../interfaces/category.model';
import { Observable, catchError } from 'rxjs';
import { HandleErrorService } from '../../services/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  private handle = inject(HandleErrorService);

  private apiUrl = `${API_URL}/category`;

  constructor() { }

  create(body:CreateCategoryDTO): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/register`,{ ...body })
      .pipe(
        catchError(this.handle.handleErr())
      )
  }

  update(id:number,body:UpdateCategoryDTO) {
    return this.http.put(`${this.apiUrl}/edit/${id}`,{...body})
      .pipe(
        catchError(this.handle.handleErr())
      )
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handle.handleErr())
      )
  }

  findOne(id:number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handle.handleErr())
      )
  }

}
