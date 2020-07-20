import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  newProduct = { title: "", productType: "", price: 0 };
  showNewProductPanel = true;
  @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  //add function onNewProductClick() to process add new Product event
  onNewProductClick() {
    console.log("New Product emit");
    this.addProduct.emit(this.newProduct);
    this.newProduct = { title: "", productType: "", price: 0 };
  }
}
