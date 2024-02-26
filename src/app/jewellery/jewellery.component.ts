import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrl: './jewellery.component.css'
})
export class JewelleryComponent implements OnInit {
  constructor(private _ProductsService:ProductsService,private _ActivatedRoute: ActivatedRoute,private cartService:CartserviceService){}
  arr: any[] = [];
  item: any;
  cartList: any[] = [];
  ngOnInit(): void {
    this._ProductsService.cat('jewelery').subscribe({
      next: (res) => {
           this.arr=res
    }
    })
    let { id } = this._ActivatedRoute.snapshot.params;
console.log(id)
  
    this._ProductsService.details(id).subscribe({
      next: (res) => {
        this.item = res;
      }
    })
    
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
        localStorage.setItem('cart', JSON.stringify(this.cartList));
    }
    localStorage.setItem('cart', JSON.stringify(this.cartList));
    this.cartService.setCartCount(this.cartList.length);
  }
  }

  
  

