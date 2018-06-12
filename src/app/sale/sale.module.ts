import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing module
import { AppRoutingModule } from '../app-routing.module';
// Components
import { SaleIndexComponent } from './sale-index/sale-index.component';
import { SaleShowComponent } from './sale-show/sale-show.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    SaleIndexComponent,
    SaleShowComponent
  ],
  exports: [
    SaleIndexComponent,
    SaleShowComponent
  ]
})
export class SaleModule { }
