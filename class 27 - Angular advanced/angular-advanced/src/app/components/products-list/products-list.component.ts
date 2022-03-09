import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  totalPrice: number = 0;
  myCart: Product[] = [];
  products: Product[] = [
    {
      id: "1",
      name: 'Toy',
      price: 40,
      image: "../../../assets/toy.jpg"
    },
    {
      id: "2",
      name: 'Car',
      price: 60,
      image: "../../../assets/toy.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddToshoppingCart(product: Product) {
    this.myCart.push(product);
    // this.totalPrice += product.price; // Esto está sujeto a errores
    this.totalPrice = this.myCart.reduce((total, product) => total + product.price, 0);
  }

}
