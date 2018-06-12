import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing module
import { AppRoutingModule } from '../app-routing.module';
// Components
import { ClientIndexComponent } from './client-index/client-index.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    ClientIndexComponent,
    ClientShowComponent,
    ClientNewComponent,
    ClientEditComponent,
  ],
  exports: [
    ClientIndexComponent,
    ClientShowComponent,
    ClientNewComponent,
    ClientEditComponent,
  ]
})
export class ClientModule { }