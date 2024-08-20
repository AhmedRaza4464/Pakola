import { Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SubscribeFormComponent } from './pages/subscribe-form/subscribe-form.component';
import { CurasolComponent } from './Shared/components/curasol/curasol.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductCards2Component } from './product-cards2/product-cards2.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContacUsComponent } from './pages/contac-us/contac-us.component';
import { CartComponent } from './pages/view cart pagess/cart.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CarbonatedProductsComponent } from './pages/carbonated-products/carbonated-products.component';

export const routes: Routes = [
  {
    path: 'About-Us',
    component: AboutusComponent,
  },
  {
    path: 'Home/subs',
    component: SubscribeFormComponent,
  },
  {
    path: 'Shop',
    component: ShopComponent,
  },
  {
    path: 'Recipes',
    component: RecipesComponent,
  },

  { path: 'product-detail', component: ProductDetailComponent, },


  { path: 'check-out', component: CheckoutComponent, },


  { path: 'category/:categoryName', component: CarbonatedProductsComponent },
  { path: 'contact-us', component: ContacUsComponent, },
  { path: 'Home/view-cart', component: CartComponent, },
  {
    path: 'Home',
    component: CurasolComponent,

  },


  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/Home',
  },


];
