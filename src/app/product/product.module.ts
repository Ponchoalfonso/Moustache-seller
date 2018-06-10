import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductIndexComponent
  ],
  exports: [
    ProductIndexComponent
  ]
})
export class ProductModule { }
