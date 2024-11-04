import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private addToCartApi = 'http://localhost:8080/GoFood/api/add'
  private getCartApi = 'http://localhost:8080/GoFood/api/cart'


  constructor(private http: HttpClient) {}

  // Fetch all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.getCartApi);
  }

  addToCart(CartPoductData: any): Observable<any> {
    console.log(CartPoductData)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.addToCartApi, CartPoductData);
  }
}
