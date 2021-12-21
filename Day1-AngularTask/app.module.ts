import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LaguageDepartmentComponent } from './laguage-department/laguage-department.component';
import { ProductComponent } from './product/product.component';
import { ImagestackComponent } from './imagestack/imagestack.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LaguageDepartmentComponent,
    ProductComponent,
    ImagestackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
