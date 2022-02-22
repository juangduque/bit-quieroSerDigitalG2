import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-registro-producto',
    templateUrl: './registro-producto.component.html',
    styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

    productoForm: FormGroup;
    soloNumeros = /^([0-9])*$/;
    titulo_formulario = 'Crear producto';
    id: String | null;

    constructor(private fb: FormBuilder, private productoService: ProductoService, private router: Router, private idProductoPath: ActivatedRoute) {
        this.productoForm = this.fb.group({
            nombre: ['', Validators.required],
            proveedor: ['', Validators.required],
            precio: ['0', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
            stock_productos: ['', Validators.pattern(this.soloNumeros)]
        });

        this.id = this.idProductoPath.snapshot.paramMap.get('id');
        console.log(`%c Parametro de la url: ${this.id}`, 'color: red; font-size: 1.5rem;')
    }

    ngOnInit(): void {
        this.accionSolicitada();
    }

    InfoProducto() {
        console.log(this.productoForm)
        const data_producto_form: Producto = {
            nombre: this.productoForm.get('nombre')?.value,
            precio: this.productoForm.get('precio')?.value,
            proveedor: this.productoForm.get('proveedor')?.value,
            cantidad_stock: this.productoForm.get('stock_productos')?.value
        }
        console.log(data_producto_form)
        if (this.id === null) {
            //cuando el usuario crea
            this.productoService.postProductos(data_producto_form).subscribe(data => {
                this.router.navigate(['/inventario']);
                Swal.fire({
                    icon: 'success',
                    title: 'Dato guardado',
                    text: 'El producto se creo correctamente'
                })
            }, error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo esta pasando',
                    text: 'Comuniquese con el administrador'
                })
                console.log(error)
            })
        } else {
            //cuando el usuario actualiza
            this.productoService.putProducto(this.id, data_producto_form).subscribe(data => {
                this.router.navigate(['/inventario']);
                Swal.fire({
                    icon: 'success',
                    title: 'Dato actualizado',
                    text: 'El producto se cambio correctamente'
                })
            }, error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo esta pasando',
                    text: 'Comuniquese con el administrador'
                })
                console.log(error)
            })

        }

    }

    accionSolicitada() {
        if (this.id !== null) {
            this.titulo_formulario = "Editar producto";
            this.productoService.getProducto(this.id).subscribe(data => {
                let stock = (data.cantidad_stock !== undefined) ? data.cantidad_stock : 0;
                this.productoForm.setValue({
                    nombre: data.nombre,
                    precio: data.precio,
                    proveedor: data.proveedor,
                    stock_productos: stock
                })
            }, error => {
                console.log(error)
            })
        }
    }

}
