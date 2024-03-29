import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({providedIn: 'root'})
export class authGuard implements CanActivate {
   constructor(private _authService: AuthService,private _router:Router) {
   
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if (this._authService.userdata.getValue() !=null) {
      return true;
      
    }
    else {
      this._router.navigate(['/login'])
      return false;
    }
  }
 
};
