import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ElecComponent } from './elec/elec.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch:'full'},
  { path: 'home',canActivate:[authGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  { path: 'cart/:id',canActivate:[authGuard], component: CartComponent },
  { path: 'electronesc',canActivate:[authGuard], component: ElecComponent },
  { path: "men'sClothes",canActivate:[authGuard], component: MenComponent },
  { path: "women'sClothes",canActivate:[authGuard], component: WomenComponent },
  { path: 'jewelleries', canActivate: [authGuard], component: JewelleryComponent },
  {path:'productdetails/:id',canActivate:[authGuard],component:ProductdetailsComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
