// product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/GoFood/api/foodcards'; 
  private addToCartApi = 'http://localhost:8080/GoFood/api/add'


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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, productData);
  }

  // Update an existing product
  updateProduct(id: number, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, productData);
  }

  // Delete a product
  deleteProduct(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.delete(`${this.apiUrl}/${id}`, { headers, responseType: 'text' });
  }

  addToCart(CartPoductData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.addToCartApi, CartPoductData);
  }
  
}
