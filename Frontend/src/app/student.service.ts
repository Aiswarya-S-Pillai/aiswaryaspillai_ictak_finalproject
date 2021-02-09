import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  item= {
    studentId :'',
    studentName:'',
    book:'',
    genre:'',
    country:'',
    price:'',
    starRating:'',
    imageUrl:''}
  constructor( private http:HttpClient) { }
  getStudent(id:any){
    return this.http.get("http://localhost:3000/student/"+id);
  }
  getStudents(){
    return this.http.get("http://localhost:3000/students");
  }

  newStudent(item:any)
  {   
    return this.http.post("http://localhost:3000/insertstudent",{"student":item})
    .subscribe(data =>{console.log(data)})
  }
  
  deleteStudent(id:any)
  {

    return this.http.delete("http://localhost:3000/removestudent/"+id);

  }
 
}