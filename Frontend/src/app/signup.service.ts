import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // SignupService(registeredUser: any) {
  //   throw new Error('Method not implemented.');
  // }

//   item=
// {name: '',
// email : '',
// username:'',
// password : '',
// confirmPassword : '',
// }
  constructor(private http:HttpClient) { }
  // getSignups(id:any){
  //   return this.http.get("http://localhost:3000/signup/"+id);
  // }
  getSignup(signup:any){
    return this.http.post("http://localhost:3000/insertsignup",{"signup":signup})
      .subscribe(data=>{console.log(data)})
  }
  // newSignup(item:any)
  // {   
  //   return this.http.post("http://localhost:3000/insertsignup",{"signup":item})
  //   .subscribe(data =>{console.log(data)})
  // }
}
