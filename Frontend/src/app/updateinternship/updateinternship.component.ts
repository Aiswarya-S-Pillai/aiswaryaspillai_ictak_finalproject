import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {InternshipService} from '../internship.service'
@Component({
  selector: 'app-updateinternship',
  templateUrl: './updateinternship.component.html',
  styleUrls: ['./updateinternship.component.css']
})
export class UpdateinternshipComponent implements OnInit {

  authorItem= {
    authorId :'',
    authorName:'',
    book:'',
    genre:'',
    country:'',
    price:'',
    starRating:'',
    imageUrl:''}
  
 
  constructor(private router:Router,private internshipservice:InternshipService) { localStorage.setItem("userType",'Admin');}
  

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.internshipservice.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.internshipservice.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}
