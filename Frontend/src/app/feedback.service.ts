import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
 item= {
      
      feedbackName:'',
      book:'',
      genre:'',
      country:'',
      price:'',
      starRating:'',
    }
    constructor( private http:HttpClient) { }
    getFeedback(id:any){
      return this.http.get("http://localhost:3000/feedback/"+id);
    }
    getFeedbacks(){
      return this.http.get("http://localhost:3000/feedbacks");
    }
  
    newFeedback(item:any)
    {   
      return this.http.post("http://localhost:3000/insertfeedback",{"feedback":item})
      .subscribe(data =>{console.log(data)})
    }
    
   
   
  }
