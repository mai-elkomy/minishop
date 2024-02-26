import { ProductsService } from './../products.service';
import { Component ,EventEmitter, OnInit, Output} from '@angular/core';
import { HostBinding } from '@angular/core';
import Swal from 'sweetalert2';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
   animations: [
    // animation triggers go here
  ]
})
export class HomeComponent {
  constructor(private _ProductsService: ProductsService,private cartService:CartserviceService) { console.log(this.cartList.length)}
  arr: any[] = [];
  title: string='';
  cartList: any[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     this._ProductsService.products().subscribe({
      next: (res) => {
        this.arr = res
      }
     });
    //this.amountproduct()
  }
  highlightSelected(prd:any, amount = 1) {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      const existProduct = this.cartList.find(
          (item) => item.prd.id == prd.id
      );
       if (existProduct) {
          Swal.fire('This Product is already in your cart');
        } else {
          this.cartList.push({ prd, amount });
          localStorage.setItem('cart', JSON.stringify(this.cartList));
        }
     } else {
      this.cartList.push({ prd, amount });
      Swal.fire('Done');
      localStorage.setItem('cart', JSON.stringify(this.cartList));
      
    }
    localStorage.setItem('cart', JSON.stringify(this.cartList));
    this.cartService.setCartCount(this.cartList.length);
  }
 
}
