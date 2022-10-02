import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { ChartsModule } from 'ng2-charts';
import { CapitalizePipe } from '../directives/capitalize.pipe';
import { MaterialModule } from '../material-module';
import { BudgetDialogComponent } from './components/budget-dialog/budget-dialog.component';
import { BudgetComponent } from './components/budget/budget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { ListingTableComponent } from './components/listing-table/listing-table.component';
import { OperationManagementComponent } from './components/operation-management/operation-management.component';
import { PlanningListComponent } from './components/planning-list/planning-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseRequestComponent } from './components/purchase-request/purchase-request.component';
import { RequirementListComponent } from './components/requirement-list/requirement-list.component';
import { RisksListComponent } from './components/risks-list/risks-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Chart } from 'chart.js';
import { AddAttachmentDialogComponent } from './dialogs/add-attachment-dialog/add-attachment-dialog.component';
import { AddCommentDialogComponent } from './dialogs/add-comment-dialog/add-comment-dialog.component';
import { AddMemberDialogComponent } from './dialogs/add-member-dialog/add-member-dialog.component';
import { CreateUpdateInvoiceComponent } from './dialogs/create-update-invoice/create-update-invoice.component';
import { CreateUpdateIssueComponent } from './dialogs/create-update-issue/create-update-issue.component';
import { CreateUpdateOperationComponent } from './dialogs/create-update-operation/create-update-operation.component';
import { CreateUpdateOrderComponent } from './dialogs/create-update-order/create-update-order.component';
import { CreateUpdatePlanComponent } from './dialogs/create-update-plan/create-update-plan.component';
import { CreateUpdateProjectComponent } from './dialogs/create-update-project/create-update-project.component';
import { CreateUpdateRequestComponent } from './dialogs/create-update-request/create-update-request.component';
import { CreateUpdateRequirementComponent } from './dialogs/create-update-requirement/create-update-requirement.component';
import { CreateUpdateRiskComponent } from './dialogs/create-update-risk/create-update-risk.component';


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
    ListingTableComponent,
    CapitalizePipe,
    ProjectDetailsComponent,
    AddCommentDialogComponent,
    AddAttachmentDialogComponent,
    AddMemberDialogComponent,
    CreateUpdateProjectComponent,
    PlanningListComponent,
    CreateUpdatePlanComponent,
    CreateUpdateRiskComponent,
    RisksListComponent,
    CreateUpdateIssueComponent,
    IssuesListComponent,
    RequirementListComponent,
    CreateUpdateRequirementComponent,
    CreateUpdateRequestComponent,
    CreateUpdateOrderComponent,
    CreateUpdateInvoiceComponent,
    OperationManagementComponent,
    CreateUpdateOperationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ChartsModule,
    MatSortModule
  ]
})
export class DashboardModule { }
