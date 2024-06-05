import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constant/constant';
import { Category, CreateCategoryDTO } from './../interfaces/category.model';
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


}
