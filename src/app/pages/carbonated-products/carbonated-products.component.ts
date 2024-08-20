import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductListComponent } from "../product-list/product-list.component";


@Component({
  selector: 'app-carbonated-products',
  standalone: true,
  templateUrl: './carbonated-products.component.html',
  styleUrl: './carbonated-products.component.css',
  imports: [ProductDetailComponent, ProductListComponent]
})
export class CarbonatedProductsComponent implements OnInit {
  categoryTitle: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryTitle = this.route.snapshot.paramMap.get('categoryName')!;
  }
}