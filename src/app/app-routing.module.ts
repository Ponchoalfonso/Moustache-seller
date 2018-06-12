import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// AppModule components
import { PointSalesComponent} from './point-sales/point-sales.component';
// ProductModule components
import { ProductIndexComponent } from './product/product-index/product-index.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductShowComponent } from './product/product-show/product-show.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
// SaleModule components
import { SaleIndexComponent } from './sale/sale-index/sale-index.component';
import { SaleShowComponent } from './sale/sale-show/sale-show.component';
// ClientModulte components
import { ClientIndexComponent } from './client/client-index/client-index.component';
import { ClientShowComponent } from './client/client-show/client-show.component';
import { ClientNewComponent } from './client/client-new/client-new.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'point-of-sales', pathMatch: 'full' },
  // Point of sales
  { path: 'point-of-sales', component: PointSalesComponent },
  // Products routes
  { path: 'products', component: ProductIndexComponent },
  { path: 'products/new', component: ProductNewComponent },
  { path: 'products/:id', component: ProductShowComponent },
  { path: 'products/:id/edit', component: ProductEditComponent },
  // Sales routes
  { path: 'sales', component: SaleIndexComponent },
  { path: 'sales/:id', component: SaleShowComponent },
  // Clients routes
  { path: 'clients', component: ClientIndexComponent },
  { path: 'clients/new', component: ClientNewComponent },
  { path: 'clients/:id', component: ClientShowComponent },
  { path: 'clients/:id/edit', component: ClientEditComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
