import { Component } from '@angular/core';
import { CarbonatedProductsComponent } from "../carbonated-products/carbonated-products.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CarbonatedProductsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {


  
}
