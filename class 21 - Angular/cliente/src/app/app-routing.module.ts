import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ingreso', component: LoginComponent },
    { path: 'sistema', component: DashboardComponent },
    { path: 'inventario', component: ProductosComponent },
    { path: '404', component: Pagina404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
