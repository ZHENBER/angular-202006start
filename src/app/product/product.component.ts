import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "../models/product"; //add

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product; // product property of Type Product.// import Input
  @Output() deletedItem: EventEmitter<Product> = new EventEmitter(); // import Output, EventEmitter from '@angular/core'

  constructor() {}

  ngOnInit() {}
  onDelete(product) {
    console.log(product);
    // Emit selected product item from child to parent
    this.deletedItem.emit(this.product);
  }
}
