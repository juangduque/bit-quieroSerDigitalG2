import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    url_api = 'http://127.0.0.1:3000/api/usuarios'
    constructor(private http: HttpClient) { }


    getUsuarios(): Observable<any>{
        return this.http.get(this.url_api);
    }

    getUsuario(id: string): Observable<any>{
        return this.http.get(`${this.url_api}/${id}`);
    }

    postUsuario(usuario: Usuario): Observable<any>{
        return this.http.post(this.url_api, usuario);
    }

    putUsuario(id: string, usuario: Usuario): Observable<any>{
        return this.http.put(`${this.url_api}/${id}`, usuario);
    }

    deleteUsuario(id: string): Observable<any>{
        return this.http.delete(`${this.url_api}/${id}`);
    }


}
