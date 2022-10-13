import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = []
  public grandTotal : number = 0.0

  constructor( private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.product = res 
    })
    this.grandTotal = this.cartService.getTotalPrice()
    
  }

  deleteItem(item: any){
    this.cartService.deleteItem(item)
    this.grandTotal -= item.total
  }

}
