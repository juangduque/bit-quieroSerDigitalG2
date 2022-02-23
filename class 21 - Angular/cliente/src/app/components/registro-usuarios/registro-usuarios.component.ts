import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
    selector: 'app-registro-usuarios',
    templateUrl: './registro-usuarios.component.html',
    styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

    usuarioForm: FormGroup;
    soloNumeros = /^([0-9])*$/;
    validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    constructor(private fb: FormBuilder) {
        this.usuarioForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            edad: ['', [Validators.required, Validators.pattern(this.soloNumeros)]],
            correo: ['', [Validators.required, Validators.pattern(this.validacionEmail)]],
            password: ['', Validators.required],
            telefono: ['', Validators.pattern(this.soloNumeros)],
            direccion: ['']
        })
    }

    ngOnInit(): void {
    }

    infoUsuario(){
        console.log(this.usuarioForm)

        const data_usuario:Usuario = {
            nombre: this.usuarioForm.get('nombre')?.value,
            apellido: this.usuarioForm.get('apellido')?.value,
            edad: this.usuarioForm.get('edad')?.value,
            correo: this.usuarioForm.get('correo')?.value,
            password: this.usuarioForm.get('password')?.value,
            telefono: this.usuarioForm.get('telefono')?.value,
            direccion: this.usuarioForm.get('direccion')?.value
        }

        console.log(data_usuario)
    }

}
