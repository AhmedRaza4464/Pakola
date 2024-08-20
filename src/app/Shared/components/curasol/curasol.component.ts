import { Component } from '@angular/core';
import { ProductItemsComponent } from '../../../pages/product-items/product-items.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curasol',
  standalone: true,
  imports:[ProductItemsComponent,RouterModule,CommonModule],
  templateUrl: './curasol.component.html',
  styleUrl: './curasol.component.css'
})
export class CurasolComponent {



  
}
