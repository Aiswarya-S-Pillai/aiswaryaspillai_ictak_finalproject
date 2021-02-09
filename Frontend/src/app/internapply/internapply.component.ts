import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { StudentinternService } from '../studentintern.service';


@Component({
  selector: 'app-internapply',
  templateUrl: './internapply.component.html',
  styleUrls: ['./internapply.component.css']
})
export class InternapplyComponent implements OnInit {

  interns=[{
    internId :'',
    internName:'',
    book:'',
    genre:'',
    country:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  // toggleImage(): void{
  //   this.showImage = !this.showImage;
  // }
  constructor(private router:Router,private studentinternservice: StudentinternService,public _auth:AuthService){   
    localStorage.setItem("userType",'Expert');
  }
  ngOnInit(): void{
    this.studentinternservice.getInterns().subscribe((data)=>{
      this.interns=JSON.parse(JSON.stringify(data));
     
  })
  }
 
  AddIntern(author:any)
  {
    localStorage.setItem("InternId", author._id.toString());
    this.router.navigate(['addintern']);

  }

  deleteIntern(author:any)
  {
   
    alert("Are you sure to delete");
    this.studentinternservice.deleteIntern(author._id)
      .subscribe((data) => {
        this.interns = this.interns.filter(p => p !== author);
      })
  

  }
  okIntern()
  {
   
    alert("Student Application for internship is Approved!!");
    this.router.navigate(['email']);

}

}
