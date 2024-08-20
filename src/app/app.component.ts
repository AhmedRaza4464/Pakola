import { RecipesComponent } from './pages/recipes/recipes.component';
import { FilterComponent } from './pages/filter/filter.component';
import { ContacUsComponent } from './pages/contac-us/contac-us.component';
import { ProductItemsComponent } from './pages/product-items/product-items.component';
import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './Shared/shared.module';
import { CartComponent } from "./pages/view cart pagess/cart.component";
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SubscribeFormComponent } from './pages/subscribe-form/subscribe-form.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { BucketMenuComponent } from './pages/bucket-menu/bucket-menu.component';
import { MoreComponent } from './pages/about/more/more.component';
import { BacktotopComponent } from './pages/backtotop/backtotop.component';
import { CommonModule } from '@angular/common';
import { ModuleproductComponent } from './pages/moduleproduct/moduleproduct.component';
import { ProductCards2Component } from './product-cards2/product-cards2.component';
import { CurasolComponent } from './Shared/components/curasol/curasol.component';
import { NgbModule, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { FiltersComponent } from "./pages/about/more/filters/filters.component";
// import { CarbonatedProductsComponent } from "./pages/carbonated-products/carbonated-products.component";
import { WaterComponent } from "./pages/water/water.component";
import { CarbonatedProductsComponent } from './pages/carbonated-products/carbonated-products.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NgbModule, CarbonatedProductsComponent,NgbOffcanvasModule, ProductItemsComponent, CurasolComponent, CommonModule, SharedModule, BucketMenuComponent, SubscribeFormComponent, ProductDetailComponent, ModuleproductComponent, CheckoutComponent, ProductItemsComponent, AboutusComponent, CartComponent, MoreComponent, BacktotopComponent, ProductCards2Component, RecipesComponent, ProductListComponent, FiltersComponent, FilterComponent, ShopComponent, WaterComponent]
})
export class AppComponent {



  showFooter: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is the checkout page
        this.showFooter = !this.router.url.includes('check-out');
      }
    });
  }

  title = 'E-commerce';




}


