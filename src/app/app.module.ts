import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './componets/navi/navi.component';
import { CarComponent } from './componets/car/car.component';
import { BrandComponent } from './componets/brand/brand.component';
import { ColorComponent } from './componets/color/color.component';
import { CustomerComponent } from './componets/customer/customer.component';
import { RentalComponent } from './componets/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
