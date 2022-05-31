import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductsComponent } from './component/products/products.component';


const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  { path: "product/add", component: ProductAddComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductAddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }