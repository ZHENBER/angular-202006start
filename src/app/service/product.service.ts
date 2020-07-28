import { Injectable } from "@angular/core";
import { MockData } from "./../mock-data/mock-product-data"; //add

@Injectable()
export class ProductService {
  products = MockData.Products; //add

  addProduct(newProduct) {
    let idArray = this.products.map(x => x.id);
    newProduct.id = Math.max(...idArray) + 1;
    this.products.push(newProduct);
  }

  //for edit
  updateProduct({ id, title, productType, price }) {
    let filterProducts = this.products.filter(x => x.id === parseInt(id));
    if (filterProducts.length > 0) {
      filterProducts[0].title = title;
      filterProducts[0].productType = productType;
      filterProducts[0].price = price;
    }
  }

  removeProduct(id) {
    console.log(`in service remove product: ${id}`);
    this.products.splice(this.products.findIndex(x => x.id === id), 1);
  }

  getProduct(id) {
    const filterProducts = this.products.filter(x => x.id === parseInt(id));
    return filterProducts.length === 0 ? undefined : filterProducts[0];
  }
}
