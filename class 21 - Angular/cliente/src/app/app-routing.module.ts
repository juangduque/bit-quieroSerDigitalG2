import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: 'sistema', component: DashboardComponent },
    { path: 'inventario', component: ProductosComponent },
    { path: '404', component: Pagina404Component },
    { path: 'crear-producto', component: RegistroProductoComponent },
    { path: 'editar-producto/:id', component: RegistroProductoComponent },
    { path: 'usuarios', component:  ListaUsuariosComponent},
    { path: 'crear-usuario', component:  RegistroUsuariosComponent},
    { path: 'editar-usuario', component:  RegistroUsuariosComponent},
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
