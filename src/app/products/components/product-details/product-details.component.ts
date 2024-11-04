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
  productId : any;
  product: any;

  constructor(private productService : ProductService, private route : ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('productId');
  }

  ngOnInit() : void{
    this.productService.getProductById(this.productId).subscribe((response : any)=>{
      this.product = response;
    });
  }
}

