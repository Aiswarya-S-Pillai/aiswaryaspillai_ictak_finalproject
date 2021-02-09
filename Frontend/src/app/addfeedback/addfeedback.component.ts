import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {
 
    constructor(private feedbackservice:FeedbackService,private router: Router){ localStorage.setItem("userType",'user') } 
  
    feedbackItem= {
      
       feedbackName:'',
       book:'',
      genre:'',
       country:'',
       price:'',
       starRating:'',
      }
   // productItem: IProduct;
    ngOnInit():void {
    }
    AddFeedback()
    {    
      this.feedbackservice.newFeedback(this.feedbackItem);
      console.log("Called");    
      alert("Feedback submitted successfully");
      this.router.navigate(['/products']);
    }
  }
  
