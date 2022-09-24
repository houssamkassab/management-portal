import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './dash-module/components/budget/budget.component';
import { DashboardComponent } from './dash-module/components/dashboard/dashboard.component';
import { EventManagementComponent } from './dash-module/components/event-management/event-management.component';
import { HomePageComponent } from './dash-module/components/home-page/home-page.component';
import { InvoicesComponent } from './dash-module/components/invoices/invoices.component';
import { ProjectManagementComponent } from './dash-module/components/project-management/project-management.component';
import { PurchaseOrderComponent } from './dash-module/components/purchase-order/purchase-order.component';
import { PurchaseRequestComponent } from './dash-module/components/purchase-request/purchase-request.component';
import { LoginComponent } from './login-module/components/login/login.component';

const routes: Routes = [
  // { path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login-module/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./dash-module/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./dash-module/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
