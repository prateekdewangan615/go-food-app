import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // API URL for adding products to the cart
  private addToCartApi = 'http://localhost:8080/GoFood/api/add';
  
  // API URL for fetching the cart content
  private getCartApi = 'http://localhost:8080/GoFood/api/cart';

  // Injecting HttpClient to perform HTTP requests
  constructor(private http: HttpClient) {}

  // Fetch the list of products in the cart
  getProducts(): Observable<any[]> {
    // Make a GET request to retrieve all the products currently in the cart
    return this.http.get<any[]>(this.getCartApi);
  }

  // Add a product to the shopping cart
  addToCart(CartPoductData: any): Observable<any> {
    // Log the product data to the console for debugging
    console.log(CartPoductData);
    
    // Set the 'Content-Type' header to 'application/json' to inform the server about the request payload format
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    // Make a POST request to add the product data to the cart
    return this.http.post<any>(this.addToCartApi, CartPoductData, { headers });
  }
}
