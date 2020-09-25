import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InventoryMaintenanceComponent } from './inventory-maintenance/inventory-maintenance.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailsService} from './appServices/user-details.service'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { ProductsComponent } from './products/products.component';
import { InventoryRequestPageComponent } from './inventory-request-page/inventory-request-page.component';
import { ProductsService } from './appServices/products.service';
import { CartComponent } from './cart/cart.component';
import { InventoryRequestHistoryPageComponent } from './inventory-request-history-page/inventory-request-history-page.component';
import { RequestApprovalPageComponent } from './request-approval-page/request-approval-page.component';
import { RequestApprovalHistoryPageComponent } from './request-approval-history-page/request-approval-history-page.component';
import { HeaderComponent } from './header/header.component';
import { MaintenanceProductsComponent } from './maintenance-products/maintenance-products.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    InventoryMaintenanceComponent,
    LogoutComponent,
    ProductsComponent,
    InventoryRequestPageComponent,
    CartComponent,
    InventoryRequestHistoryPageComponent,
    RequestApprovalPageComponent,
    RequestApprovalHistoryPageComponent,
    HeaderComponent,
    MaintenanceProductsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule

  ],
  providers: [UserDetailsService , ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
