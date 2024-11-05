import { CommonModule } from '@angular/common'; 
import { Component, OnInit } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ProductService } from '../../../services/product.service'; 
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './add-product.component.html',
  styles: ``
})

export class AddProductComponent implements OnInit {
  // Form group that contains the form controls and validation rules
  addProductForm: FormGroup;

  // States for managing success and error messages
  isSaved = false;
  showError = false;

  // Constructor: Injecting dependencies and initializing the form
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    // Defining the form controls and their validators
    this.addProductForm = this.fb.group({
      name: ['', Validators.required], // Product name is required
      quantity: [null, [Validators.required, Validators.min(1)]], // Quantity must be a number greater than 0
      price: [null, [Validators.required, Validators.min(0)]], // Price must be a number greater than or equal to 0
      description: ['', Validators.required], // Product description is required
      category: ['', Validators.required], // Category is required
    });
  }

  // Lifecycle hook - Called once the component has been initialized
  ngOnInit() { }

  // Function to handle form submission
  handleAddProduct() {
    // Check if the form is valid
    if (this.addProductForm.valid) {
      // Prepare the data to be sent to the backend
      const formData = {
        name: this.addProductForm.value.name,
        quantity: this.addProductForm.value.quantity,
        price: this.addProductForm.value.price,
        description: this.addProductForm.value.description,
        category: this.addProductForm.value.category,
      };

      // Send the form data to the ProductService to add the product
      this.productService.addProduct(formData).subscribe({
        next: (response) => {
          // On success, set the success state and reset the form
          this.isSaved = true;
          this.addProductForm.reset();
          
          // After 2 seconds, navigate to the products list page
          setTimeout(() => {
            this.router.navigate(['/products']); // Navigate to products page
          }, 2000);
        },
        error: (error) => {
          // If there's an error, log it and show the error message
          console.error('Error adding product', error);
          this.showError = true; // Show error state
        }
      });
    } else {
      // If form is invalid, show the error message
      this.showError = true; // Show error state
    }
  }
}
