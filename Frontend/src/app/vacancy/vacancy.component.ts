import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  userType=localStorage.getItem("userType");
  pageTitle: string = 'Product List';
  imageWidth: number = 150;
  imageMargin: number = 70;
  imageheight:number=150;
  showImage: boolean = false;

  products=[{
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  
  constructor(private router:Router,private vacancyservice: VacancyService,public _auth:AuthService){   
   //localStorage.setItem("userType",'Admin');
  }
  ngOnInit(): void{
    this.vacancyservice.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
 
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
   
  moreProduct(product:any)
  {
    localStorage.setItem("productId", product._id.toString());
    this.router.navigate(['product']);

  }
  
  deleteProduct(product:any)
  {
    alert("Are you sure to delete");
    this.vacancyservice.deleteProduct(product._id)
   
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
      
  

  }
}
  