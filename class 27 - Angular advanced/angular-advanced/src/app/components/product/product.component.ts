import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  inputText: string = "";
  buttonDisable: boolean = true
  @Input() product: Product = {
    id: "",
    name: '',
    price: 0,
    image: ""
  };
  @Output() addedProduct = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    this.addedProduct.emit(this.product);
    // console.log('add to cart');
  }

}
