import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }



  products():Observable<any> {
  return this.http.get(`https://fakestoreapi.com/products`)
}
  cat(cat:string):Observable<any> {
   return this.http.get(`https://fakestoreapi.com/products/category/${cat}`)
}

  details(id:number):Observable<any> {
  return(this.http.get(`https://fakestoreapi.com/products/${id}`))
}


}
