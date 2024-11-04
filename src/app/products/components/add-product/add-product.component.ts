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

export class AddProductComponent implements OnInit{
  addProductForm: FormGroup;
  isSaved = false;
  showError = false;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

   ngOnInit() { }

   handleAddProduct() {
    if (this.addProductForm.valid) {
      const formData = {
        name: this.addProductForm.value.name,
        quantity: this.addProductForm.value.quantity,
        price: this.addProductForm.value.price,
        description: this.addProductForm.value.description,
        category: this.addProductForm.value.category,
      };
  
      // Directly send JSON data
      this.productService.addProduct(formData).subscribe({
        next: (response) => {
          this.isSaved = true; // Set success state
          this.addProductForm.reset(); // Optionally reset the form
          setTimeout(() => {
            this.router.navigate(['/products']); // Navigate to the product list
          }, 2000); 
        },
        error: (error) => {
          console.error('Error adding product', error);
          this.showError = true; // Show error state
        }
      });
    } else {
      this.showError = true; // Show error state
    }
  }
  

}

