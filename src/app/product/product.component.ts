import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "../models/product"; //add
import { ProductService } from "../service/product.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product; // product property of Type Product.// import Input
  //@Output() removedItem: EventEmitter<Product> = new EventEmitter(); // import Output, EventEmitter from '@angular/core'

  constructor(private productService : ProductService,private router : Router) {}

  ngOnInit() {}
  onRemove(product) {
    console.log(product);
    // Emit selected product item from child to parent
    //this.removedItem.emit(this.product);
    this.productService.removeProduct(product);
  }

  showDetail(){
     this.router.navigate(['products', this.product.id]);
  }
}
