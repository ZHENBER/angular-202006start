import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NewProductComponent } from "./new-product/new-product.component";

const appRoutes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' }, // [url]/home
  { path:'home', component: HomeComponent }, // [url]/home
  { path:'products', children: [
    {path: '', component: ProductsComponent, pathMatch: 'full'}, // [url]/products
    { path:':id', component: ProductDetailComponent },  // [url]/products/1
    { path:':id/edit', component: NewProductComponent },  // [url]/products/1/edit
  ] }, 
  { path:'404', component: PageNotFoundComponent },  // [url]/products/1
  { path: '**', redirectTo: '404' } // no any route matched 
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // import router module and define routes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
