import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  productDetails = {
    imageUrl : String,
    title: String,
    description : String,
    price : String 
  }

  constructor(private details: AuthenticationService) { }

  ngOnInit(): void {
  }
  adddetails(){
    console.log(this.productDetails)
    this.details.addproduct(this.productDetails).subscribe( res => {
      console.log(res)
  })
}}
