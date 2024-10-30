// product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:8080/api/foodcards';

  constructor(private http: HttpClient) {}

  // Fetch all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch a single product by ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add a new product
  addProduct(productData: any): Observable<any> {
    console.log(productData);
    return this.http.post<any>(this.apiUrl, productData);
  }

  // Update an existing product
  updateProduct(id: number, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, productData);
  }

  // Delete a product
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
