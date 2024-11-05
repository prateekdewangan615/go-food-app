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
  // Declare an array to hold the list of products retrieved from the server
  products: any[] = [];
  
  // Flags to control the visibility of success and error toasts
  showToast: boolean = false;
  showToastError: boolean = false;

  // Injecting necessary services for product and cart management
  constructor(
    private productService: ProductService,  // Service to manage product data
    private cartService: CartService         // Service to manage cart data
  ) {}

  // ngOnInit is a lifecycle hook that runs when the component is initialized
  ngOnInit(): void {
    // Fetch the list of products from the product service
    this.productService.getProducts().subscribe((response: any) => {
      // Assign the response (list of products) to the products array
      this.products = response;
    });
  }

  // Method to handle adding a product to the shopping cart
  addProductToCart(product: any): void {
    // Prepare the product details to be added to the cart
    const productDetails = {
      id: product.id,                // Product ID
      foodName: product.name,         // Product name
      price: product.price,           // Product price
      quantity: product.quantity,     // Product quantity
      description: product.description, // Product description
      category: product.category      // Product category
    };

    // Call the cart service to add the product to the cart
    this.cartService.addToCart(productDetails).subscribe(
      (response) => {
        // On success, log the response and display a success toast
        console.log('Product added to cart:', response);
        this.showToast = true; // Show success toast

        // Automatically hide the toast after 3 seconds
        setTimeout(() => this.showToast = false, 3000);

        // Optionally, fetch the updated cart data after adding the product
        this.cartService.getProducts().subscribe(cartData => {
          console.log('Updated Cart:', cartData);
        });
      },
      (error) => {
        // On failure, log the error and display an error toast
        console.error('Failed to add product to cart:', error);
        this.showToastError = true; // Show error toast

        // Automatically hide the error toast after 3 seconds
        setTimeout(() => this.showToastError = false, 3000);
      }
    );
  }

  // Method to close both success and error toasts
  closeToast() {
    // Hide both success and error toasts
    this.showToast = this.showToastError = false;
  }
}
