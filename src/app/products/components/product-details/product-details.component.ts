import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styles: ``
})
export class ProductDetailsComponent implements OnInit {
  productId: any; // Variable to store the product ID from the route parameter
  product: any; // Variable to store the product data fetched from the API

  // Inject the ProductService and ActivatedRoute into the constructor
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    // Retrieve the 'productId' parameter from the route's snapshot
    this.productId = this.route.snapshot.paramMap.get('productId');
  }

  // ngOnInit lifecycle hook is used to fetch the product data after component initialization
  ngOnInit(): void {
    // Call the ProductService to fetch the product details by the productId
    this.productService.getProductById(this.productId).subscribe((response: any) => {
      // Once the data is successfully retrieved, assign it to the product variable
      this.product = response;
    });
  }
}

