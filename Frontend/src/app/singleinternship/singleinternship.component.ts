import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

import { InternshipService } from '../internship.service';
@Component({
  selector: 'app-singleinternship',
  templateUrl: './singleinternship.component.html',
  styleUrls: ['./singleinternship.component.css']
})
export class SingleinternshipComponent implements OnInit {
  userType=localStorage.getItem("userType");
 
  pageTitle: string = 'Authors List';
  imageWidth: number = 150;
  imageMargin: number = 70;
  imageheight:number=150;
  showImage: boolean = false;

  authors={
    authorId :'',
    authorName:'',
    book:'',
    genre:'',
    country:'',
    price:'',
    starRating:'',
    imageUrl:''};
  
  // toggleImage(): void{
  //   this.showImage = !this.showImage;
  // }
  constructor(private router:Router,private internshipservice: InternshipService,public _auth:AuthService){   
  // localStorage.setItem("userType",'isAdmin'); 
  }

  ngOnInit(): void{
    let id = localStorage.getItem("authorId");
    this.internshipservice.getAuthor(id).subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  
  }}