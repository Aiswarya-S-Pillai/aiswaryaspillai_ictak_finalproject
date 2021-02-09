import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';


import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {



  students=[{
    studentId :'',
    studentName:'',
    book:'',
    genre:'',
    country:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  // toggleImage(): void{
  //   this.showImage = !this.showImage;
  // }
  constructor(private router:Router,private studentservice: StudentService,public _auth:AuthService){   
    localStorage.setItem("userType",'Expert')
  }
  ngOnInit(): void{
    this.studentservice.getStudents().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
     
  })
  }
 
  AddStudent(author:any)
  {
    localStorage.setItem("StudentId", author._id.toString());
    this.router.navigate(['addintern']);

  }

  deleteStudent(author:any)
  {
   
    alert("Are you sure to delete");
    this.studentservice.deleteStudent(author._id)
      .subscribe((data) => {
        this.students = this.students.filter(p => p !== author);
      })
  

  }
  okStudent()
  {
   
    alert("Student Application is Approved!!");
    this.router.navigate(['email']);
}

}
