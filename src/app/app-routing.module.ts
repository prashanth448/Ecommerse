import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RoutegaurdGuard } from './routegaurd.guard';
import { SellComponent } from './sell/sell.component';


const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[RoutegaurdGuard]},
  {path:'products', component:ProductsComponent, canActivate:[RoutegaurdGuard]},
  //{path:"sell", component: SellComponent, canActivate:[RoutegaurdGuard] },
  {path: "cart" , component:CartComponent, canActivate:[RoutegaurdGuard]},
  {path:'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
