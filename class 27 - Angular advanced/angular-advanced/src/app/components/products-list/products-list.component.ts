import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { ProductsService } from '../../services/products.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  totalPrice: number = 0;
  productsCounter: number = 0;
  products: Product[] = [];
  date: Date = new Date();

  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onAddToshoppingCart(product: Product) {
    this.productsService.addProduct(product);
    // this.myCart.push(product); // Esta lógica está en el servicio
    // this.totalPrice += product.price; // Esto está sujeto a errores
    this.totalPrice = this.productsService.getTotal();
    // this.totalPrice = this.myCart.reduce((total, product) => total + product.price, 0);
    this.productsCounter = this.productsService.getQuatityOfProducts();
  }

}
