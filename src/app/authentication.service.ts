import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  
  submitData(data: any){ 
    console.log(data)
    return this.http.post("http://localhost:3000/add",data)
  }
  loginUser(user: any){
    return this.http.post("http://localhost:3000/login",user)
  }
  addproduct(details:any){
    return this.http.post("http://localhost:3000/addproduct",details)
  }

  getproducts(){
    return this.http.get("http://localhost:3000/getproducts")
    .pipe(map((res:any) => {
      return res;
    }))
  }
}




