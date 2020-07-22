import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) {}

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    console.log("ID : " + id);
    this.product = this.productService.getProduct(id);
  }

  //Add a goBack() method to the component class that navigates backward one step in the browser’s history stack using the Location service that we have injected previously.
  goBack() {
    this.location.back();
  }
}
