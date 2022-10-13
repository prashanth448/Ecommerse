import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { SellComponent } from './sell/sell.component';
import { CartComponent } from './cart/cart.component';
import { CommonInterceptor } from './common.interceptor';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
   
    HomeComponent,
        HeaderComponent,
        ProductsComponent,
        SellComponent,
        CartComponent,
        AdminComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
