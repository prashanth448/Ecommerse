import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutegaurdGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(){
    if (localStorage.getItem("token")){
      return true
    }else {
      this.route.navigate(['/'])
      return false 
    }
  }
}
  

