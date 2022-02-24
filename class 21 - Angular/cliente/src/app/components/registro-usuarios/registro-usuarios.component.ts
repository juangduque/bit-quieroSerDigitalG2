import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-registro-usuarios',
    templateUrl: './registro-usuarios.component.html',
    styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

    usuarioForm: FormGroup;
    soloNumeros = /^([0-9])*$/;
    validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    tituloFormulario = 'Crear usuario';
    idDataUsuario: string | null;

    constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private idUsuario: ActivatedRoute) {
        this.usuarioForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            edad: ['', [Validators.required, Validators.pattern(this.soloNumeros)]],
            correo: ['', [Validators.required, Validators.pattern(this.validacionEmail)]],
            password: ['', Validators.required],
            telefono: ['', Validators.pattern(this.soloNumeros)],
            direccion: ['']
        })
        this.idDataUsuario = this.idUsuario.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.accionSolicitada()
    }

    infoUsuario() {

        console.log(this.usuarioForm)

        const data_usuario: Usuario = {
            nombre: this.usuarioForm.get('nombre')?.value,
            apellido: this.usuarioForm.get('apellido')?.value,
            edad: this.usuarioForm.get('edad')?.value,
            correo: this.usuarioForm.get('correo')?.value,
            password: this.usuarioForm.get('password')?.value,
            telefono: this.usuarioForm.get('telefono')?.value,
            direccion: this.usuarioForm.get('direccion')?.value
        }

        if (this.idDataUsuario !== null) {
            this._usuarioService.putUsuario(this.idDataUsuario, data_usuario).subscribe(data => {
                this.router.navigate(['/usuarios']);
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario actualizado'
                })
            }, error => {
                console.log(error);
            })
        }else{
            this._usuarioService.postUsuario(data_usuario).subscribe(data => {
                this.router.navigate(['/usuarios'])
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario registrado'
                })
            }, error => {
                console.log(error);
            })
        }

    }

    accionSolicitada() {
        if (this.idDataUsuario !== null) {
            this.tituloFormulario = 'Editar usuario';
            this._usuarioService.getUsuario(this.idDataUsuario).subscribe(data => {
                this.usuarioForm.setValue({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    edad: data.edad,
                    correo: data.correo,
                    // password: '',
                    password: data.password,
                    telefono: data.telefono,
                    direccion: data.direccion
                })
            }, error => { })
        }
    }

}
