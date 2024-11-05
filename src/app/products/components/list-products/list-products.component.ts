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
  showToast: boolean = false;
  showToastError: boolean = false;

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
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category
    };

    this.cartService.addToCart(productDetails).subscribe(
      (response) => {
        console.log('Product added to cart:', response);
        // Display success toast
        this.showToast = true;
        setTimeout(() => this.showToast = false, 3000); // Hide toast after 3 seconds

        // Fetch updated cart data (Optional)
        this.cartService.getProducts().subscribe(cartData => {
          console.log('Updated Cart:', cartData);
        });
      },
      (error) => {
        console.error('Failed to add product to cart:', error);
        // Display error toast
        this.showToastError = true;
        setTimeout(() => this.showToastError = false, 3000); // Hide error toast after 3 seconds
      }
    );
  }

  closeToast() {
    this.showToast = this.showToastError = false;
  }
}
