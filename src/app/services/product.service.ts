// product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // API URL for fetching products
  private apiUrl = 'http://localhost:8080/GoFood/api/foodcards'; 
  
  // API URL for adding products to the cart
  private addToCartApi = 'http://localhost:8080/GoFood/api/add';

  // Inject HttpClient service to make HTTP requests
  constructor(private http: HttpClient) {}

  // Fetch all products from the server
  getProducts(): Observable<any[]> {
    // Perform a GET request to fetch all product data
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch a single product by its ID from the server
  getProductById(id: number): Observable<any> {
    // Perform a GET request to fetch a single product using the ID
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add a new product to the server
  addProduct(productData: any): Observable<any> {
    // Set the Content-Type header to 'application/json'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Perform a POST request to send the new product data to the server
    return this.http.post<any>(this.apiUrl, productData, { headers });
  }

  // Update an existing product on the server
  updateProduct(id: number, productData: any): Observable<any> {
    // Perform a PUT request to update the existing product by its ID
    return this.http.put<any>(`${this.apiUrl}/${id}`, productData);
  }

  // Delete a product from the server
  deleteProduct(id: number): Observable<any> {
    // Set the Content-Type header to 'text/plain' for the delete operation
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    // Perform a DELETE request to remove the product using the ID
    return this.http.delete(`${this.apiUrl}/${id}`, { headers, responseType: 'text' });
  }

  // Add a product to the shopping cart
  addToCart(CartPoductData: any): Observable<any> {
    // Set the Content-Type header to 'application/json' for the cart addition
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Perform a POST request to add the product data to the cart
    return this.http.post<any>(this.addToCartApi, CartPoductData, { headers });
  }
  
}
