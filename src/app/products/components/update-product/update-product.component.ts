import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './update-product.component.html',
  styles: ``,
})
export class UpdateProductComponent {
  successMessage: boolean = false; // Flag to show success message when the product is updated
  productId: any; // Variable to hold the product ID
  productData: any = {}; // Object to store the fetched product data for editing

  // Reactive form to manage product update inputs
  updateProductForm: FormGroup;

  constructor(
    private productService: ProductService, // Service to interact with product-related API
    private route: ActivatedRoute, // ActivatedRoute service to fetch route parameters
    private router: Router // Router service to navigate between routes
  ) {
    // Get the product ID from the route parameter
    this.productId = this.route.snapshot.paramMap.get('productId');

    // Initialize the reactive form with validation rules for each input field
    this.updateProductForm = new FormGroup({
      name: new FormControl('', Validators.required), // Name is required
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]), // Quantity must be a positive number
      price: new FormControl(null, [Validators.required, Validators.min(0)]), // Price must be zero or a positive number
      description: new FormControl('', Validators.required), // Description is required
      category: new FormControl('', Validators.required), // Category is required
    });
  }

  // ngOnInit lifecycle hook to fetch the product data when the component is initialized
  ngOnInit() {
    // Fetch the product details by ID from the ProductService
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.productData = product; // Store the fetched product data for editing
      },
      (error) => {
        console.error('Error fetching product details', error); // Log an error if the product fetch fails
      }
    );
  }

  // Method to handle the form submission and update the product
  updateProduct(form: NgForm) {
    // Check if the form is valid before proceeding
    if (form.valid) {
      // Prepare the updated data based on the form values
      const updatedData = {
        name: form.value.nameInput,
        price: form.value.priceInput,
        quantity: form.value.quantityInput,
        description: form.value.descriptionInput,
        category: form.value.categoryInput,
      };

      // Call the updateProduct method from the product service to send the updated data to the backend
      this.productService.updateProduct(this.productId, updatedData).subscribe(
        (response) => {
          this.successMessage = true; // Show success message if update is successful
          form.reset(); // Reset the form fields

          // After a short delay, navigate back to the product list page
          setTimeout(() => {
            this.router.navigate(['/products']); // Navigate to the product list route
          }, 2000); // Wait for 2 seconds before navigating
        },
        (error) => {
          console.error('Update failed', error); // Log an error if the update fails
        }
      );
    }
  }
}
