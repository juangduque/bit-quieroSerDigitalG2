import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  myCart: Product[] = [];

  constructor() { }

  getShoppingCart(): Product[] {
    return this.myCart;
  }

  addProduct(product: Product){
    this.myCart.push(product);
  }

  getTotal(): number {
    return this.myCart.reduce((total, product) => total + product.price, 0);
  }
  getQuatityOfProducts(): number {
    return this.myCart.length;
  };
}
