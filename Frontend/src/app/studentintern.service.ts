import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentinternService {

  item= {
    internId :'',
    internName:'',
    book:'',
    genre:'',
    country:'',
    price:'',
    starRating:'',
    imageUrl:''}
  constructor( private http:HttpClient) { }
  getIntern(id:any){
    return this.http.get("http://localhost:3000/intern/"+id);
  }
  getInterns(){
    return this.http.get("http://localhost:3000/interns");
  }

  newIntern(item:any)
  {   
    return this.http.post("http://localhost:3000/insertintern",{"intern":item})
    .subscribe(data =>{console.log(data)})
  }
  
  deleteIntern(id:any)
  {

    return this.http.delete("http://localhost:3000/removeintern/"+id);

  }
 
}