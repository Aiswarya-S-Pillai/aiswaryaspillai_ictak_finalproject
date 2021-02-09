import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent  {
  constructor(private router: Router,public _auth:AuthService){localStorage.setItem("userType",'Expert')  } 
  Admin={
    email:'',
    subject:'',
    matter:'',
    pass:'',
    mail:''
  }



  emailSend(){
    console.log(this.Admin)
    this._auth.emailSend(this.Admin)
   
    console.log("called");
    alert("Confirmation email is send to the student emailid "+this.Admin.email+"!!");
   // this.errorval=true;
    this.router.navigate(['/addintern']);

  }

}
