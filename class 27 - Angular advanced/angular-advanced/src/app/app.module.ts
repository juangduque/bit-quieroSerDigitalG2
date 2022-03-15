import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ImgComponent } from './components/img/img.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PurchaseProductsComponent } from './pages/purchase-products/purchase-products.component';
import { OrderResumeComponent } from './pages/order-resume/order-resume.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    ReversePipe,
    ImgComponent,
    NotFoundComponent,
    PurchaseProductsComponent,
    OrderResumeComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
