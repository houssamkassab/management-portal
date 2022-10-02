import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { OperationManagementComponent } from './components/operation-management/operation-management.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';
import { PurchaseOrderComponent } from './components/purchase-order/purchase-order.component';
import { PurchaseRequestComponent } from './components/purchase-request/purchase-request.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children:[
      // {
      //   path: '',
      //   component: HomePageComponent
      // },
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
        path: 'project-management',
        component: ProjectManagementComponent,
      },
      {
        path: 'project-management/:ID',
        component: ProjectManagementComponent,
      },
      {
        path: 'event-management',
        component: EventManagementComponent
      },
      {
        path: 'operation-management',
        component: OperationManagementComponent
      }
      /*,{
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }*/
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
