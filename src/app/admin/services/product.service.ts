import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from '../../services/handle-error.service';
import { API_URL } from '../../constants/constant';
import { Product, CreateProductDTO, UpdateProductDTO } from '../interfaces/product.model';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  private handle = inject(HandleErrorService);

  private apiUrl = `${API_URL}/product`;

  constructor() { }

  create(body:CreateProductDTO): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/register`,body)
      .pipe(
        catchError(this.handle.handleErr())
      )
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        catchError(this.handle.handleErr())
      )
  }

  findOne(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handle.handleErr())
      )
  }

}















