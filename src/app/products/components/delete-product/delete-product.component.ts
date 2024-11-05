import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './delete-product.component.html',
  styles: ``
})
export class DeleteProductComponent implements OnInit {
  productId: number | null = null;  // Variable to store the product ID retrieved from the route
  successMessage: string | null = null;  // Variable to store the success message after deletion
  errorMessage: string | null = null;  // Variable to store the error message if deletion fails

  constructor(
    private productService: ProductService,  // Inject the product service to interact with backend APIs
    private route: ActivatedRoute,  // ActivatedRoute to access route parameters (e.g., product ID)
    private router: Router  // Router for navigation after the delete operation
  ) {}

  ngOnInit(): void {
    // Get the 'productId' from the route parameters
    const idParam = this.route.snapshot.paramMap.get('productId');
    
    // If 'productId' is found, convert it to a number and assign it
    if (idParam) {
      this.productId = +idParam;  // '+' converts the string 'idParam' to a number
    } else {
      console.error('Product ID not found in route parameters');  // Log an error if no product ID is found in the URL
      this.productId = null;  // Set productId to null in case of error
    }
  }

  // Method to delete a product
  deleteProduct(): void {
    // Only proceed with deletion if productId is valid
    if (this.productId) {
      this.productService.deleteProduct(this.productId).subscribe(
        response => {
          // If product deletion is successful, set the success message
          this.successMessage = 'Product deleted successfully!';
          
          // Navigate back to the product list after 2 seconds
          setTimeout(() => this.router.navigate(['/products']), 2000);
        },
        error => {
          // If there is an error during deletion, set the error message
          this.errorMessage = 'Error deleting product. Please try again.';
        }
      );
    }
  }

  // Method to cancel the deletion process and navigate back to the product list
  cancel(): void {
    this.router.navigate(['/products']);  // Navigate back to the product list view
  }
}