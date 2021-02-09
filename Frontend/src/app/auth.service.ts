import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import{User} from 'src/app/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
 // private _loginUrl = "http://localhost:3000/studentlogin";
  loginUser1(user:any){
    return this.http.post<any>("http://localhost:3000/login",user);
  }

  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/studentlogin",user);
  }
  expertUser(user:any){
    return this.http.post<any>("http://localhost:3000/expertlogin",user);
  }
  constructor(private http: HttpClient) { }

  //  loginUser1(user:any){
  //    return this.http.post<any>("http://localhost:3000/login",user)
  //  }
  // loginUser(user:any)
  // {
  //   return this.http.post<any>(this._loginUrl, user)
  // }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  getSignup(signup:User){
    return this.http.post("http://localhost:3000/insertsignup",{"signup":signup})
  }
 
    
emailSend(email:any){
  return this.http.post("http://localhost:3000/email",email)
  .subscribe(data =>{console.log(data)})
}

  }
  // isAdmin(){
  //   return !!localStorage.getItem('isAdmin');
  // }
  // loginUser(user){
  //   return this.http.post(this._loginUrl,user);
  // }


// registerUser(user){
//   // console.log(user);
//   return this.http.post(this._registerUrl,user);
// }



// getLoggedInUseremail(){
//   return localStorage.getItem('CALMSemail');
// }

// getLoggedInUserID(){
//   return localStorage.getItem('CALMSuserID')
// }
// getUserDetails(id){
//   return this.http.post(this._getUserUrl,{"_id":id});
// }

// getUsers(){
//   return this.http.get(this._getUsersUrl);
// }

// saveUser(user){
//   return this.http.post(this._updateUserUrl,user);
// }

// deleteUser(id){
//   return this.http.post(this._deleteUserUrl,{"userID":id});
// }

// loggedIn(){
//   return !!localStorage.getItem('token');

// }
// getToken(){
//   return localStorage.getItem('token');
// }

// isAdmin(){
//   return !!localStorage.getItem('isAdmin');
// }
// }