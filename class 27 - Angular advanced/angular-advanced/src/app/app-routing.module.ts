import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../app/pages/not-found/not-found.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { OrderResumeComponent } from '../app/pages/order-resume/order-resume.component';
import { PurchaseProductsComponent } from '../app/pages/purchase-products/purchase-products.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: 'purchase', component: PurchaseProductsComponent},
  { path: 'order-resume', component:OrderResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
