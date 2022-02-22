import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    listaProductos: Producto[] = [];

    constructor(private _productoService: ProductoService) { }

    ngOnInit(): void {
        this.obtenerProductos()
    }

    obtenerProductos() {
        this._productoService.getProductos().subscribe(data => {
            console.log(data);
            this.listaProductos = data
        }, error => {
            console.log(error)
        })
    }

    eliminarProducto(id: String) {
        Swal.fire({
            title: 'Enserio desea eliminarlo :( ?',
            text: "Esta accion no se podra deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                this._productoService.deleteProducto(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado'
                    })
                    this.obtenerProductos()
                }, error => {
                    console.log(error);
                })

            }
        })
    }

}
