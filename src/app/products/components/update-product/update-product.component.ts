import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styles: ``
})
export class UpdateProductComponent {
  successMessage : boolean = false;
  productId : any;
  productData: any = {};

  updateProductForm : FormGroup;
  constructor(private productService: ProductService, private route: ActivatedRoute){
    this.productId = this.route.snapshot.paramMap.get('productId');

    this.updateProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      category: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    this.productService.getProductById(this.productId).subscribe(product => {
      this.productData = product;
    }, error => {
      console.error('Error fetching employee details', error);
    });
  }

  updateProduct(form : NgForm){
    if(form.valid){
      const updatedData = {
        name : form.value.nameInput,
        price : form.value.priceInput,
        quantity : form.value.quantityInput,
        category : form.value.categoryInput,
      };
      this.productService.updateProduct(this.productId, updatedData).subscribe(response=>{
        console.log("Inside update products");
        console.log(response);
        this.successMessage = true;
        form.reset(); 
      },error=>{
        console.error('Update failed', error);
      });
    }
  }
}
