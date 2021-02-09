import { Component, OnInit } from '@angular/core';
import {InternshipService} from '../internship.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newinternship',
  templateUrl: './newinternship.component.html',
  styleUrls: ['./newinternship.component.css']
})
export class NewinternshipComponent implements OnInit {

  
  constructor(private internshipservice:InternshipService,private router: Router){    localStorage.setItem("userType",'Admin');   } 
  authorItem= {
     authorId :'',
     authorName:'',
     book:'',
    genre:'',
     country:'',
     price:'',
     starRating:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddAuthor()
  {    
    this.internshipservice.newAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }
}
