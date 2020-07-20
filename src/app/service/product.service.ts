import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {
  products = [
      {
        id: 11,
        title: "OPPO F5 Youth (Gold, 32 GB)",
        modelName: "F5 Youth",
        color: "Gold",
        productType: "Mobile",
        brand: "OPPO",
        price: 16990
      },
      {
        id: 12,
        title: "Dell Inspiron 7000",
        modelName: "Inspiron",
        color: "Gray",
        productType: "Laptop",
        brand: "DELL",
        price: 59990
      }
    ];

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