import { Injectable } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { BucketMenuComponent } from './pages/bucket-menu/bucket-menu.component';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  constructor(private offcanvasService: NgbOffcanvas) {}

  openDrawer() {
    this.offcanvasService.open(BucketMenuComponent, { position: 'end' }); // Adjust position as necessary
  }
}
