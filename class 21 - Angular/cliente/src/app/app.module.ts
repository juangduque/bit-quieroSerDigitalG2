import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';

@NgModule({
    declarations: [
        AppComponent,
        Pagina404Component,
        LoginComponent,
        HomeComponent,
        SliderComponent,
        DashboardComponent,
        ProductosComponent,
        NavbarComponent,
        RegistroProductoComponent,
        ListaUsuariosComponent,
        RegistroUsuariosComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
