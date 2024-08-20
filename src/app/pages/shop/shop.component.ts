import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  constructor(private route :Router){}

  carbonate(){
    this.route.navigateByUrl ('/category/:categoryName')
  }
  
}
