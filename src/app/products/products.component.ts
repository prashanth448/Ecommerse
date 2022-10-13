import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productsLIst : any 
  constructor(private api : AuthenticationService, private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.api.getproducts()
    .subscribe(res => {
      this.productsLIst = res
      console.log(this.productsLIst)

      this.productsLIst.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }

  addToCart(product : any){
    this.cartService.addToCart(product)
    alert("Item Added into Your Cart")
  }

}
