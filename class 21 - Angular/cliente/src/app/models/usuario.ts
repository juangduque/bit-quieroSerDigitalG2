export class Usuario{
    _id?: number;
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    password: string;
    telefono: string;
    direccion: string;

    constructor(nombreUsuario: string, apellidoUsuario: string, edadUsuario: number, correoUsuario: string, passUsuario: string, telefonoUsuario: string, direccionUsuario: string){
        this.nombre = nombreUsuario;
        this.apellido = apellidoUsuario;
        this.edad = edadUsuario;
        this.correo = correoUsuario;
        this.password = passUsuario;
        this.telefono = telefonoUsuario;
        this.direccion = direccionUsuario;
    }
}
