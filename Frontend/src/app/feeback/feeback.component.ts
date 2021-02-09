import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';


import { FeedbackService } from '../feedback.service';
@Component({
  selector: 'app-feeback',
  templateUrl: './feeback.component.html',
  styleUrls: ['./feeback.component.css']
})
export class FeebackComponent implements OnInit {

    feedbacks=[{
     
      feedbackName:'',
      book:'',
      genre:'',
      country:'',
      price:'',
      starRating:'',
     }]
    
    // toggleImage(): void{
    //   this.showImage = !this.showImage;
    // }
    constructor(private router:Router,private feedbackservice: FeedbackService,public _auth:AuthService){   
      
    }
    ngOnInit(): void{
      this.feedbackservice.getFeedbacks().subscribe((data)=>{
        this.feedbacks=JSON.parse(JSON.stringify(data));
       
    })
    }
   
    AddFeedback(author:any)
    {
      localStorage.setItem("FeedbackId",author._id.toString());
      this.router.navigate(['addfeedback']);
  
    }
  
   
    
  
    }
  
  