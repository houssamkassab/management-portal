import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { BudgetDialogComponent } from './components/budget-dialog/budget-dialog.component';
import { BudgetComponent } from './components/budget/budget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ListingTableComponent } from './components/listing-table/listing-table.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseRequestComponent } from './components/purchase-request/purchase-request.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    BudgetComponent,
    PurchaseRequestComponent,
    PurchaseOrderComponent,
    InvoicesComponent,
    DashboardComponent,
    ProjectManagementComponent,
    EventManagementComponent,
    BudgetDialogComponent,
    ListingTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
