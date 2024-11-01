import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './list-products.component.html',
  styles: `
    .top-banner{
      width: 100%;
      background: url('./images/bg/bg-1.jpg') center;
      background-size: cover;
      padding: 16.875rem 0 9.375rem;
    }
    .card-img-top {
      width: 100%;
      height: 15vw;
      object-fit: cover;
    }
  `,
})
export class ListProductsComponent implements OnInit{
  products : any[] = [];
  
  constructor(private productService: ProductService){
    console.log("inside list products constructor")
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response : any)=>{
      console.log(response);
      this.products = response;
    });
    console.log("inside ng oninit")
  }
}
