import { MockData } from "./../mock-data/mock-product-data"; //add
import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../models/product"; //add
import { ProductService } from "./../service/product.service"; // <<-- import service

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  // providers: [ProductService] // <-- prodvide this service for this component
})
export class ProductsComponent implements OnInit {
  allowNewProduct = true;
  // import Product model from ../models/product
  @Input() products: Product[]; //add
  // New Product Item
  newProduct = { title: "", productType: "", price: 0 };
  // New Property
  showNewProductPanel = false;
  constructor(private productService: ProductService) {
    this.products = MockData.Products; //add
    this.products = productService.products;
  }
  ngOnInit() {}

  // Using *ngIf to output data conditionally
  onNewProductClick() {
    //alert("new button click");
    this.showNewProductPanel = !this.showNewProductPanel;
  }
  // use event binding to receive event emit
  onAddProduct(newProduct) {
    console.log(newProduct);
    // inject product.service for get products and add new product
    this.productService.addProduct(newProduct);
    // this.products.push(newProduct);
  }
  // Remove selected item from products
  onDeletedItem(product: Product) {
    console.log("in app component: ", product);
    this.productService.removeProduct(product.id);
    // this.products.splice(this.products.findIndex(x => x.id === product.id), 1);
  }
}
