import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// Routing module
import { AppRoutingModule } from '../app-routing.module';
// Components
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    ProductIndexComponent,
    ProductNewComponent,
    ProductShowComponent,
    ProductEditComponent
  ],
  exports: [
    ProductIndexComponent,
    ProductNewComponent,
    ProductShowComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
