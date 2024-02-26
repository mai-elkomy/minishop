import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute) { }
   item: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     

  let { id } = this._ActivatedRoute.snapshot.params;
console.log(id)
  
    this._ProductsService.details(id).subscribe({
      next: (res) => {
        this.item = res;
      }
    })
  }
    
  
  
}
