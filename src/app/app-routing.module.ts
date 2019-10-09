import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthguardService } from './authguard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  // guarded routes
  { path: 'check-out', component: CheckoutComponent, canActivate: [AuthguardService] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthguardService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthguardService] },
  // admin routes
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthguardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthguardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
