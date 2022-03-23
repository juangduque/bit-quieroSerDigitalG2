import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  BASE_URL = "https://localhost:3000/api/v1"
  ENDPOINT = "/products"
  URL = `${this.BASE_URL}${this.ENDPOINT}`

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>( this.URL );
  }

  postProduct(productToPost: Product){
    return this.http.post( this.URL , productToPost);
  }

  updateProduct(id: string, productToUpdate: Product){
    productToUpdate = {
      ...productToUpdate,
      id
    };
    return this.http.put( this.URL , productToUpdate);
  }

  deleteProduct(id: string, productToDelete: Product){
    const options = {
      body: {
        id,
        productToDelete
      }
    }
    return this.http.delete(this.URL, options)
  }
}
