import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseRequestComponent } from './components/purchase-request/purchase-request.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'purchase-request',
    component: PurchaseRequestComponent
  },
  {
    path: 'purchase-order',
    component: PurchaseOrderComponent
  }
  ,{
    path: 'budget',
    component: BudgetComponent
  }
  ,{
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'porject-management',
    component: ProjectManagementComponent
  },
  {
    path: 'event-management',
    component: EventManagementComponent
  }
  ,{
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
