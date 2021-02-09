import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

import { VacancyService } from '../vacancy.service';
@Component({
  selector: 'app-singlevacancy',
  templateUrl: './singlevacancy.component.html',
  styleUrls: ['./singlevacancy.component.css']
})
export class SinglevacancyComponent implements OnInit {
  userType=localStorage.getItem("userType");
  pageTitle: string = 'Product List';
  imageWidth: number = 150;
  imageMargin: number = 70;
  imageheight:number=150;
  showImage: boolean = false;

  products={
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}
  
  
  constructor(private router:Router,private vacancyservice: VacancyService,public _auth:AuthService){   
  //  localStorage.setItem("userType",'isAdmin');
  }
  ngOnInit(): void{
    let id = localStorage.getItem("productId");
    this.vacancyservice.getProduct(id).subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
  
 
}