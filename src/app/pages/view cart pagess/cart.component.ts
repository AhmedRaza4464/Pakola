import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private route :Router){}
quantity: number = 1;


  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increase() {
    this.quantity++;
  }

  closeProduct() {

    console.log('Product closed');
  }

  checkout() {
    alert ('Conform CheckOut')
    this.route.navigateByUrl ('check-out')
  }

  

}
