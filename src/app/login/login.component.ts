import { Component, OnInit } from '@angular/core';
import {User} from "../user-login"
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {

  public errorMsg : any
  public token : any
  public type = "password"
  userLogin = new User("","")
  public auth : "/products" | undefined
  constructor(private _auth:AuthenticationService,
              private _router : Router          
    ) { }

  ngOnInit(): void {
  }
  check(check:any){
    if (check.target.checked) {
      this.type = "text"
    }else {
      this.type = "password"
    }
  }
  
  loginUser() {
    this._auth.loginUser(this.userLogin)
      .subscribe(res => {
        this.token = res 
        localStorage.setItem("token", this.token.token) , this._router.navigate(['/home']); }, err => this.errorMsg = "User Not Registered")
  }
}
