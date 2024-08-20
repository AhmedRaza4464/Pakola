import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModuleproductComponent } from './pages/moduleproduct/moduleproduct.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(ModuleproductComponent);
  }
}
