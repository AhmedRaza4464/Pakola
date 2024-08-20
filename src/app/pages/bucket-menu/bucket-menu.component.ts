import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bucket-menu',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule
    ],
  templateUrl: './bucket-menu.component.html',
  styleUrl: './bucket-menu.component.css'
})
export class BucketMenuComponent implements OnInit{
  constructor(public activeOffcanvas: NgbActiveOffcanvas,private route :Router) {}

  products: any[]=[];

  ngOnInit(): void {
    // Initialize products array with one object (you can add more objects as needed)
    this.products.push({
      imgSrc: 'https://cdn.shopify.com/s/files/1/0630/1171/7368/products/3_efb10c60-8d9c-4f8b-aa04-3287f72b315a_small.png?v=1671456747',
      title: 'Fresh Lime 345ml - Case of 12',
      case: 'Case 12',
      price: 'Rs.627.00'
    });
  }

  RenderToCheckout(){
    this.route.navigate(['check-out']);
    this.activeOffcanvas.dismiss();
        
  }
  RenderToViewPage(){
    this.route.navigate(['Home/view-cart']);
    this.activeOffcanvas.dismiss();

  }

  closeDrawer() {
    this.activeOffcanvas.dismiss();
  }


}
