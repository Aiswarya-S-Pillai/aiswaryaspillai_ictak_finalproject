import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userType=localStorage.getItem("userType");
  title = 'Frontend';
  constructor(public _auth:AuthService,
  private _router:Router){
  localStorage.setItem("userType",'Admin');
  localStorage.setItem("userType",'Expert');
  localStorage.setItem("userType",'user');
}

logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/home'])
}
loggedUser()
{
  this._router.navigate(['/add'])
  // this._router.navigate(['/authors'])
}
}


