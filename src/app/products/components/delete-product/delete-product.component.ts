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
  productId: number | null = null;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('productId');
    if (idParam) {
      this.productId = +idParam;
    } else {
      console.error('Product ID not found in route parameters');
      this.productId = null; 
    }
  }

  deleteProduct(): void {
    if (this.productId) {
      this.productService.deleteProduct(this.productId).subscribe(
        response => {
          this.successMessage = 'Product deleted successfully!';
         //setTimeout(() => this.router.navigate(['/products']), 2000);
        },
        error => {
          this.errorMessage = 'Error deleting product. Please try again.';
        }
      );
    }
  }
  cancel(): void {
    this.router.navigate(['/products']); // Navigate back to the product list
  }
}
