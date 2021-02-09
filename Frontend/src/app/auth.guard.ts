// import { Injectable } from '@angular/core';
// import { CanActivate,Router} from '@angular/router';
// import {AuthService} from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private _auth:AuthService,private _router:Router)
//   {

//   }
//   canActivate():boolean{
//     if (this._auth.loggedIn())
//     {
//       console.log('true')
//       return true

//     }
//     else{
//       this._router.navigate(['/products'])
//       this._router.navigate(['/authors'])
//       return false

//     }
//   }
// }


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private _auth:AuthService,private _router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(this._auth.loggedIn()){
        
        return true;
  //   } 
  //   else{
  //     this._router.navigate(['/studentlogin']);
  //     return false;
  //   }
  // }
  
}}
