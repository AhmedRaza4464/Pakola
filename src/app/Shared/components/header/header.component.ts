import { Component, ViewChild } from '@angular/core';
import { BucketMenuComponent } from '../../../pages/bucket-menu/bucket-menu.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
 


  constructor(private offcanvasService: NgbOffcanvas) {}

  openDrawer() {
    this.offcanvasService.open(HeaderComponent, { position: 'end' });
  }

  activeButton: string = 'shop';

  setActive(shop: string) {
    this.activeButton = shop;
  }

  }