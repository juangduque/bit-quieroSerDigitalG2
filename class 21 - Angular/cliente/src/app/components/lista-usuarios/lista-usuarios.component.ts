import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-lista-usuarios',
    templateUrl: './lista-usuarios.component.html',
    styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

    listaUsuarios: Usuario[] = [];

    constructor(private _usuarioService: UsuarioService) { }

    ngOnInit(): void {
        this.obtenerUsuarios();
    }

    obtenerUsuarios() {
        this._usuarioService.getUsuarios().subscribe(data => {
            console.log(data);
            this.listaUsuarios = data;
        }, error => {
            console.log(error)
        })
    }

    eliminarUsuario(id: string) {
        Swal.fire({
            title: 'Desea dar de baja el usuario?',
            text: "Esta acción no sera reversible.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                this._usuarioService.deleteUsuario(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'El usuario se elimino correctamente'
                    })
                    this.obtenerUsuarios()
                }, error => {
                    console.log(error)
                })

            }
        })
    }

}
