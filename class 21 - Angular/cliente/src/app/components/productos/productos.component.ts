import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    constructor(private _productoService: ProductoService) { }

    ngOnInit(): void {
        this.obtenerProductos()
    }

    obtenerProductos(){
        this._productoService.getProductos().subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error)
        })
    }

}
