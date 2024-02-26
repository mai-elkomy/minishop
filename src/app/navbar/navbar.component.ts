import { CartserviceService } from './../cartservice.service';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
 
// import * as $ from 'jquery';
import * as $ from "jquery";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
    host: {ngSkipHydration: 'true'}

})
export class NavbarComponent implements OnInit {
    cartCount$: any;
  constructor(private _router: Router, private _authService: AuthService, private cartService :CartserviceService) {
    console.log('this' + this._authService.userdata.getValue());
     this.cartCount$ = this.cartService.cartCount$;
  }
    islogin: boolean = false;
  ngOnInit(): void {
    this._authService.userdata.subscribe
      ({
        next: () => {
          if (this._authService.userdata.getValue() != null) {
            this.islogin = true;
          } else {
            this.islogin = false;
          }
        }
      }); 
  
   this.amountproduct()
  }


  logOut() {
    this._router.navigate(['/login']);
    localStorage.removeItem('isLogOut');
     
  }
  cartList: any[] = [];
 amount: number = 0;
  amountproduct() {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      for (let i = 0; i < this.cartList.length; i++) {
      this.amount += this.cartList[i].amount;
        
      }
    }
    console.log( this.cartCount$)
  }
 
}
