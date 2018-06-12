import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App modules
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';
import { ClientModule } from './client/client.module';
// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PointSalesComponent } from './point-sales/point-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PointSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductModule,
    SaleModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
