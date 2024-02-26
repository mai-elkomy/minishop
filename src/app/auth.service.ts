import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router:Router) { }
       userdata: any = new BehaviorSubject(null);

  
  register(registerForm:FormGroup) {
    localStorage.setItem('userName', registerForm.value.userName);
    localStorage.setItem('gender', registerForm.value.gender);
    localStorage.setItem('emailAdress', registerForm.value.emailAdress);
    localStorage.setItem('moblieNum', registerForm.value.moblieNum);
    localStorage.setItem('day', registerForm.value.dateOfBirth.day);
    localStorage.setItem('month', registerForm.value.dateOfBirth.month);
     localStorage.setItem('year', registerForm.value.dateOfBirth.year);
    localStorage.setItem('password', registerForm.value.password);

    
    console.log(localStorage.getItem('userName'));
    console.log(localStorage.getItem('emailAdress'));
    console.log(localStorage.getItem('password'));
 this._router.navigate(['/login'])
  }
  signin() {
    let decodedUser=JSON.stringify(localStorage.getItem('isLogOut'))
        this.userdata.next(decodedUser) ;
console.log(this.userdata.getValue())
  }
}
