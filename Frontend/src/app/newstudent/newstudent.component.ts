import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';


import { StudentService } from '../student.service';
@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {

  constructor(private studentservice:StudentService,private router: Router){ localStorage.setItem("userType",'user') } 
  studentItem= {
     studentId :'',
     studentName:'',
     book:'',
    genre:'',
     country:'',
     price:'',
     starRating:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit():void {
  }
  AddStudent()
  {    
    this.studentservice.newStudent(this.studentItem);
    console.log("Called");    
    alert("Application submitted successfully");
    this.router.navigate(['/products']);
  }
}
