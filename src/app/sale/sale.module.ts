import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing module
import { AppRoutingModule } from '../app-routing.module';
// Components
import { SaleIndexComponent } from './sale-index/sale-index.component';
import { SaleShowComponent } from './sale-show/sale-show.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    SaleIndexComponent,
    SaleShowComponent,
    PaymentComponent
  ],
  exports: [
    SaleIndexComponent,
    SaleShowComponent,
    PaymentComponent
  ]
})
export class SaleModule { }
