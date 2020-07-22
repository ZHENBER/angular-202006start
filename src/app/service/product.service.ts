import { Injectable } from '@angular/core';
import { MockData } from "./../mock-data/mock-product-data"; //add

@Injectable()
export class ProductService {
  products = MockData.Products; //add

  addProduct(newProduct){
    let idArray = this.products.map(x=>x.id);
    newProduct.id = Math.max(...idArray)+1
    this.products.push(newProduct);
  }

  removeProduct(id){
    console.log(`in service remove product: ${id}`)
    this.products.splice(this.products.findIndex(x => x.id === id), 1);
  }

  getProduct(id){
    const filterProducts = this.products.filter(x=>x.id === parseInt(id));
    return filterProducts.length === 0 ? undefined : filterProducts[0]
  }
  
}