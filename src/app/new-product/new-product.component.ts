import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../service/product.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  showNewProductPanel = true;
  newProduct = { title: "", productType: "", price: 0, id: "" }; // 新增id
  // @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();
  btnText = "Edit"; // 依傳入的id決定是Edit or Add
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute, // inject ActivatedRoute
    private location: Location
  ) {} // inject Location

  ngOnInit() {
    // subscribe params
    this.activatedRoute.params.subscribe({
      next: params => {
        // 如果id === new 時改變按鈕的內容
        if (params["id"] === "new") {
          this.btnText = "Add";
        }
        // 否則為更新模式，依傳入id取得product並指定給newProduct
        else {
          this.newProduct = this.destructureProduct(
            this.productService.getProduct(params["id"])
          );
        }
      }
    });
  }

  //add function onNewProductClick() to process add new Product event
  onNewProductClick() {
    // this.addProduct.emit(this.newProduct);
    // this.newProduct = { title: "", productType: "", price: 0 };
    if (this.btnText === "Edit") {
      this.productService.updateProduct(this.destructureProduct(this.newProduct));
    } else {
      this.productService.addProduct(this.newProduct);
    }

    this.newProduct = { title: "", productType: "", price: 0, id: "" };
    this.location.back();
  }
  // 解構傳入的物件為{id, title, productType, price}並傳回{id, title, productType, price}的內容
  destructureProduct({ id, title, productType, price }) {
    return { id, title, productType, price };
  }
}
