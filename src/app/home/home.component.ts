import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main>
  <h1 class="visually-hidden">Heroes examples</h1>

  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="display-5 fw-bold text-body-emphasis">Go Food App</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Welcome to Go Food. This is a simple food ecommerce website</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a routerLink="/products" class="btn btn-primary btn-lg px-4 gap-3">
          List of Products
        </a>
        <a routerLink="/products/add" class="btn btn-primary btn-lg px-4 gap-3">
          Add Product
        </a>
      </div>
    </div>
  </div>
</main>
  `,
  styles: ``
})
export class HomeComponent {

}
