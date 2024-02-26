import { CartserviceService } from './../cartservice.service';
import { Component ,HostListener, Input, OnInit,} from '@angular/core';
//import * as $ from 'jquery';
import jQuery from "jquery";
// import $ = require('jquery');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor( private _CartserviceService :CartserviceService){}
  cartList: any[] = [];
  cartItem: any[] = [];
  totalItem: number = 0;
  total: number = 0;
  totatItemFun(index:number) {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      this.totalItem=  this.cartList[index].amount
    }
  }
  getCartFromLocalStorge() {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);

     this.getCartTotal()
    }
    console.log(this.cartList)
  }
  getCartTotal() {
      this.total = 0;
    for (let x in this.cartList) {
      this.total += this.cartList[x].prd.price * this.cartList[x].amount;
      this.cartItem.push(this.cartList[x].prd)
    }
    console.log(this.total)
  }
//  fillcartItem() {
//       for (let x in this.cartList) {
//       this.cartItem.push(this.cartList[x].prd)
     
//    }
//    console.log(this.cartItem)
//    console.log(this.total)
  //   }
  deletePrd(index: number) {
    this.cartList.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
    this._CartserviceService.setCartCount(this.cartList.length);
  }
  plusAmount(index: number) {
    this.cartList[index].amount++;
    //update total
    this.getCartTotal();
    //update localStorge
    localStorage.setItem('cart', JSON.stringify(this.cartList));
     console.log(this.cartList[index].amount)
  }
  minusAmount(index: number) {
    this.cartList[index].amount--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
    console.log(this.cartList[index].amount)
  }
  detectChange() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }
  ngOnInit(): void {
  
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

    this.getCartFromLocalStorge();
  }
}
