import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent }, // [url]/home
  { path: "home", component: HomeComponent }, // [url]/home
  { path: "products", component: ProductsComponent }, // [url]/products
  { path: "**", component: PageNotFoundComponent, pathMatch: "full" } // no any route matched
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes) // import router module and define routes
  ]
})
export class AppRoutingModule {}
