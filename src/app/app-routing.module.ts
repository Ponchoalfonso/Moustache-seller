import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIndexComponent } from './product/product-index/product-index.component';
import { PointSalesComponent} from './point-sales/point-sales.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: '/point-of-sales', pathMatch: 'full' },
  // Point of sales
  { path: 'point-of-sales', component: PointSalesComponent},
  // Products routes
  { path: 'products', component: ProductIndexComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
