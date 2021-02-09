import { Component, OnInit } from '@angular/core';
//import { ProductService } from '../productservice.service'
import {VacancyService} from '../vacancy.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-newvacancy',
  templateUrl: './newvacancy.component.html',
  styleUrls: ['./newvacancy.component.css']
})
export class NewvacancyComponent implements OnInit {

  
  constructor(private vacancyservice: VacancyService,private router: Router){     localStorage.setItem("userType",'Admin');} 
  productItem= {
     productId :'',
     productName:'',
     productCode:'',
     releaseDate:'',
     description:'',
     price:'',
     starRating:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddProduct()
  {    
    this.vacancyservice.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/products']);
  }
}
