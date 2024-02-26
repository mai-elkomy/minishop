import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Typed from 'typed.js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  host: {ngSkipHydration: 'true'}
})
export class RegisterComponent {
  constructor(private _router: Router, private _authservice: AuthService) {
   
  }
  registerForm: FormGroup = new FormGroup({
    gender:new FormControl(null,Validators.required),
    userName: new FormControl(null,Validators.required),
    emailAdress: new FormControl(null, [Validators.email, Validators.required]),
    moblieNum: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormGroup({
      day: new FormControl(null, Validators.required),
      month: new FormControl(null, Validators.required),
      year:new FormControl(null,Validators.required)
    }),

    password:new FormControl(null,Validators.required)
    
    
  });
  daylist: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
 monthlist: number[]= [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]
   yearlist:number[]= [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
  ]

  submitform(registerForm:FormGroup) {
    this._authservice.register(registerForm);
  }
  
}
