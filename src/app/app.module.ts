import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule } from 'ngx-avatar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { BudgetDialogComponent } from './components/budget-dialog/budget-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BudgetComponent } from './components/budget/budget.component';
import { PurchaseRequestComponent } from './components/purchase-request/purchase-request.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListingTableComponent } from './components/listing-table/listing-table.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    AvatarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
