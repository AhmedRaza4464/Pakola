import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @ViewChild('offcanvas') offcanvasTemplate!: TemplateRef<any>;

  constructor(private offcanvasService: NgbOffcanvas) {}

  openOffcanvas() {
    this.offcanvasService.open(this.offcanvasTemplate, { position: 'end' });
  }
  }