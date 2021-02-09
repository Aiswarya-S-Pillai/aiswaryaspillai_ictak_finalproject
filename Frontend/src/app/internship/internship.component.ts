import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

import { InternshipService } from '../internship.service';
@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  userType=localStorage.getItem("userType");
 
  pageTitle: string = 'Authors List';
  imageWidth: number = 150;
  imageMargin: number = 70;
  imageheight:number=150;
  showImage: boolean = false;

  authors=[{
    authorId :'',
    authorName:'',
    book:'',
    genre:'',
    country:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  // toggleImage(): void{
  //   this.showImage = !this.showImage;
  // }
  constructor(private router:Router,private internshipservice: InternshipService,public _auth:AuthService){   
  //localStorage.setItem("userType",'Admin'); 
  }

  ngOnInit(): void{
    this.internshipservice.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }
 
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  moreAuthor(author:any)
  {
    localStorage.setItem("authorId", author._id.toString());
    this.router.navigate(['author']);

  }
  deleteAuthor(author:any)
  {
    alert("Are you sure to delete");
    this.internshipservice.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
  

  }
 
  
}
  
