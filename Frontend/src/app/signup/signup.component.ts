import { Component, OnInit } from '@angular/core';

//import { ProductService } from '../productservice.service'
import {SignupService} from '../signup.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { Validators, FormGroup, FormBuilder, EmailValidator } from '@angular/forms';

import { ActivatedRoute,Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {HttpErrorResponse} from '@angular/common/http';


import {AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup|any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private SignupService:SignupService,
    private router: Router,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  getSignup() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!');
      console.table(this.registerForm.value);
      this.SignupService.getSignup(this.registerForm.value);
      this.auth.getSignup(this.registerForm.value);
      this.router.navigate(['/studentlogin'])
    }
  }
}



   