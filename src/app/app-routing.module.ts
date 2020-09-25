import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryMaintenanceComponent } from './inventory-maintenance/inventory-maintenance.component';
import { InventoryRequestHistoryPageComponent } from './inventory-request-history-page/inventory-request-history-page.component';
import { InventoryRequestPageComponent } from './inventory-request-page/inventory-request-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RequestApprovalHistoryPageComponent } from './request-approval-history-page/request-approval-history-page.component';
import { RequestApprovalPageComponent } from './request-approval-page/request-approval-page.component';

const routes: Routes = [
  {path: '' , component: RegistrationComponent},
  {path: 'registration' , component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path : 'inventory-maintenance', component: InventoryMaintenanceComponent},
  {path: 'inventory-request-page' , component: InventoryRequestPageComponent},
  {path: 'inventory-request-history-page', component: InventoryRequestHistoryPageComponent},
  {path: 'request-approval-page', component : RequestApprovalPageComponent},
  {path: 'request-approval-history-page', component : RequestApprovalHistoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
