
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-moduleproduct',
  standalone: true,
  imports: [],
  templateUrl: './moduleproduct.component.html',
  styleUrl: './moduleproduct.component.css'
})
export class ModuleproductComponent  {

  constructor(private modalService: NgbModal) {}



  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) { // Optional: Prevent count from going below zero
      this.count--;
    }
  }
  close() {
    this.modalService.dismissAll();
  }
}





    