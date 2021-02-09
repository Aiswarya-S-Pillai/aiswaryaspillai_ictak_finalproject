import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { StudentinternService } from '../studentintern.service';

@Component({
  selector: 'app-internstudent',
  templateUrl: './internstudent.component.html',
  styleUrls: ['./internstudent.component.css']
})
export class InternstudentComponent implements OnInit {

  constructor(private studentinternservice:StudentinternService,private router: Router){ localStorage.setItem("userType",'user') } 
  internItem= {
     internId :'',
     internName:'',
     book:'',
    genre:'',
     country:'',
     price:'',
     starRating:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit():void {
  }
  AddIntern()
  {    
    this.studentinternservice.newIntern(this.internItem);
    console.log("Called");    
    alert("Application submitted successfully");
    this.router.navigate(['/products']);
  }
}
