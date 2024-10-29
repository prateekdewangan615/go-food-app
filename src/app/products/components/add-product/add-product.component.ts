import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styles: ``
})

export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  isSaved = false;
  showError = false;

  constructor(private fb: FormBuilder) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      image: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
    });
  }

  ngOnInit() {}

  handleAddProduct() {
    if (this.addProductForm.valid) {
      const formData = new FormData();
      formData.append('name', this.addProductForm.value.name);
      formData.append('image', this.addProductForm.value.image);
      formData.append('quantity', this.addProductForm.value.quantity);
      formData.append('price', this.addProductForm.value.price);
      formData.append('category', this.addProductForm.value.category);

      // Call your service to save the product
      // Example: this.productService.addProduct(formData).subscribe(...);
      this.isSaved = true; // Set success state
    } else {
      this.showError = true; // Show error state
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.addProductForm.patchValue({ image: file });
  }
}

