import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../menu.service';
import { filter } from 'rxjs';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-product-items',
  standalone:true,
  imports :[FilterComponent ],
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {

  constructor( private router: Router,private modalService: ModalService) {}


  showProductDetail () {
    this.router.navigate(['product-detail']);
  }

  openModal() {
    this.modalService.openModal();

  }
}
