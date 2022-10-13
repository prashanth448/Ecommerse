import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public type = "password"
  public result : any 
  userModel = new User("","","",'') 
  constructor(private data: AuthenticationService) { }

  ngOnInit(): void {
  }
  check(check:any){
    if (check.target.checked) {
      this.type = "text"
    }else {
      this.type = "password"
    }
  }
  onClick(){ 
    console.log(this.userModel)
    this.data.submitData(this.userModel).subscribe( res => {
      console.log(res)
    })
    }
    //console.log(this.userModel)
  }

