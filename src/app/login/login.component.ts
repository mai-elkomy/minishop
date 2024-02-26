import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, flatMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
 host: {ngSkipHydration: 'true'}
})
export class LoginComponent implements OnInit {
 
  error: boolean = false;
  errorpass: boolean = false;
    isloading: boolean = false;

  
  constructor(private _router: Router, private _AuthService:AuthService) {
    if (localStorage.getItem('isLogOut') !=null) {
      this._AuthService.signin()
      console.log(this._AuthService.userdata.getValue())
      // this._router.navigate(['/home']);
     
    }
  }
  //islogin: boolean= false;
   loginForm: FormGroup = new FormGroup({
   
    emailAdress: new FormControl(null, [Validators.email, Validators.required]),
  

    password:new FormControl(null,Validators.required)
    
    
   });
    // userdata: any = new BehaviorSubject(null);

  submitform(loginForm: FormGroup) {

    this.isloading = true;
    // console.log(loginForm.value)
    if (loginForm.value.emailAdress == localStorage.getItem('emailAdress') && loginForm.value.password==localStorage.getItem('password')) {
      //console.log('true')
      // this.userdata.next (localStorage.getItem('isLogOut'))
              localStorage.setItem('isLogOut','true');
      this._AuthService.signin();
     // this.isloading = false;
      this._router.navigate(['/home']);
      console.log(localStorage.getItem('isLogOut'))
     
    } else {
      if (loginForm.value.emailAdress != localStorage.getItem('emailAdress')) {
        this.error = true;
      }
      else if(loginForm.value.password!=localStorage.getItem('password')){
        this.errorpass = true;
        this.isloading = false;
      }
    }
  }
   ngOnInit(): void {
    this._AuthService.userdata.subscribe
      ({
        next: () => {
          if (this._AuthService.userdata.getValue() != null) {
            this._router.navigate(['/home'])
          } else {
             this._router.navigate(['/login'])
          }
        }
      });
   
  }
 
}
