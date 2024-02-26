import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { } from 'ngx-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ElecComponent } from './elec/elec.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    NotfoundComponent,
    HeaderComponent,
    JewelleryComponent,
    MenComponent,
    WomenComponent,
    ElecComponent,
    ProductdetailsComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
  FormsModule,
    ReactiveFormsModule,
           BrowserAnimationsModule
  ],
  providers: [
      provideClientHydration(),
    provideAnimationsAsync(),
      provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
