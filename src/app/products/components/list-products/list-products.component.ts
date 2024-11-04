import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './list-products.component.html',
  styles: `
    .top-banner {
      width: 100%;
      background: url('./images/bg/bg-1.jpg') center;
      background-size: cover;
      padding: 16.875rem 0 9.375rem;
    }
    .card-img-top {
      width: 100%;
      height: 15vw;
      object-fit: cover;
    }
  `,
})
export class ListProductsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response;
    });
  }

  addProductToCart(product: any): void {
    const productDetails = {
      id: product.id,
      foodName: product.name,
      quantity: product.quantity,
      price: product.price,
      option: product.category
    };
    this.cartService.addToCart(productDetails).subscribe(response => {
      console.log("Product added to cart:", response);
      // Fetch updated cart data
      this.cartService.getProducts().subscribe(cartData => {
        console.log("Updated Cart:", cartData);
        // Update any relevant state with cartData if needed
      });
    });
  }
  
}
