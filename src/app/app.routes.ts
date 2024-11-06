import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AddProductComponent } from './products/components/add-product/add-product.component';
import { UpdateProductComponent } from './products/components/update-product/update-product.component';
import { ListProductsComponent } from './products/components/list-products/list-products.component';
import { DeleteProductComponent } from './products/components/delete-product/delete-product.component';
import { CartComponent } from './cart/cart.component';
import { title } from 'node:process';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'products',
    children: [
      { path: '', component: ListProductsComponent, title: 'Products' },
      { path: 'add', component: AddProductComponent, title: 'Add Products' },
      {
        path: ':productId',
        component: ProductDetailsComponent,
        title: 'Product Details',
      },
      {
        path: ':productId/edit',
        component: UpdateProductComponent,
        title: 'Update Products',
      },
      {
        path: ':productId/delete',
        component: DeleteProductComponent,
        title: 'Delete Product',
      },
    ],
  },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
];
