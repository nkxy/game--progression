import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './../dashboard/components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRemainingTimeComponent } from './components/dashboard-remaining-time/dashboard-remaining-time.component';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [DashboardComponent, DashboardRemainingTimeComponent],
  exports: [],
  providers: [],
  })
export class DashboardModule { }
