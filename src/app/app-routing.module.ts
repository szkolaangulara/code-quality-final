import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomersDashboardComponent} from './customers-dashboard/customers-dashboard.component';
import {OffersDashboardComponent} from './offers-dashboard/offers-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: CustomersDashboardComponent
  },
  {
    path: 'offers',
    component: OffersDashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
