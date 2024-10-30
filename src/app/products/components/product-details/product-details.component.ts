import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
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
    console.log()
    this.productService.getProductById(this.productId).subscribe((response : any)=>{
      console.log(response);
      this.product = response;
    });
  }
}

