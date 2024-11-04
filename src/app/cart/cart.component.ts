import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="product">
      <div class="container-fluid px-0 top-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6">
              <h1>Bring People Together with Great Food</h1>
            </div>
            <div class="mt-4">
              <a
                class=" btn btn-primary ms-lg-4 mt-lg-0 mt-4 "
                href="/products#product-details"
                >Product List<i class="fas fa-angle-right ps-3"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <section id="product-details">
      <div class="product-details wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="text-content text-center">
                <h2>Explore our Food</h2>
              </div>
            </div>
          </div>
          <div class="row pt-5">
            <div
              class="col-lg-4 col-md-3 mb-lg-5 mb-5"
              *ngFor="let card of products"
            >
              <div class="card shadow">
                <div class="card-body">
                  <h5 class="card-title">{{ card.foodName }}</h5>
                  <b>Price: </b>{{ card.price }} <br />
                  <b>Quantity: </b>{{ card.quantity }} <br />
                  <b>Category: </b>{{ card.category }} <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class CartComponent {
  products: any[] = [];

  constructor(private CartService: CartService) {}

  ngOnInit(): void {
    this.CartService.getProducts().subscribe((response: any) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
