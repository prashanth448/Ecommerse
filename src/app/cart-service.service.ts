import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  public cartItemList : any=[]
  public prouductList = new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
    return this.prouductList.asObservable();
  }

  addToCart(product : any) {
    this.cartItemList.push(product)
    this.prouductList.next(this.cartItemList)
    this.getTotalPrice()
    console.log(this.cartItemList)
  }

  getTotalPrice(): number{
    let grandTotal = 0.0
    this.cartItemList.map((a:any) => {
      grandTotal += parseFloat(a.total)
    })
    return grandTotal
  }

  deleteItem(product : any) {
    this.cartItemList.map((a:any, index : any) => {
      if (product.id === a.id) {
        this.cartItemList.pop(product)
        
      }
    })
  }
}
