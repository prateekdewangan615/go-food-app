import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AddProductComponent } from './products/components/add-product/add-product.component';
import { UpdateProductComponent } from './products/components/update-product/update-product.component';
import { ListProductsComponent } from './products/components/list-products/list-products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', children: [
        { path: '', component: ListProductsComponent},
        { path: 'add', component: AddProductComponent},
        { path: ':productId', component: ProductDetailsComponent }, 
        { path: ':productId/edit', component: UpdateProductComponent},            
    ],
},
  { path: 'about', component: AboutComponent},
   
];
