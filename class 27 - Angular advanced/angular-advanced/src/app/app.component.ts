import { Component } from '@angular/core';

import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '';
  products: Product[] = [];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
