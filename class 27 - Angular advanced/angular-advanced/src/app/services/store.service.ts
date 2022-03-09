import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>("https://fakestoreapi.com/products");
  }
}
