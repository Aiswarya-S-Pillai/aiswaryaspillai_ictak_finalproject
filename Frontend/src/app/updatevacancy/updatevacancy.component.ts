import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VacancyService}from '../vacancy.service'
@Component({
  selector: 'app-updatevacancy',
  templateUrl: './updatevacancy.component.html',
  styleUrls: ['./updatevacancy.component.css']
})
export class UpdatevacancyComponent implements OnInit {

  productItem= {
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}
 
  constructor(private router:Router,private vacancyservice:VacancyService) { localStorage.setItem("userType",'Admin');}

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.vacancyservice.getProduct(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.vacancyservice.editProduct(this.productItem);   
    alert("Success");
    this.router.navigate(['products']);
  }

}
