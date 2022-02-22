import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    url_api = 'http://127.0.0.1:3000/api/productos';

    constructor(private http:HttpClient) { }

    getProductos(): Observable<any>{
        return this.http.get(this.url_api);
    }

    postProductos(producto: Producto): Observable<any>{
        return this.http.post(this.url_api, producto);
    }

    getProducto(id: String): Observable<any>{
        // return this.http.get(this.url_api + id)
        return this.http.get(`${this.url_api}/${id}`)
    }

    putProducto(id: String, producto: Producto): Observable<any>{
        return this.http.put(`${this.url_api}/${id}`, producto)
    }

    deleteProducto(id: String): Observable<any>{
        return this.http.delete(`${this.url_api}/${id}`)
    }
}
