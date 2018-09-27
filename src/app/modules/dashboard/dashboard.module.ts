import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './../dashboard/components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRemainingTimeComponent } from './components/dashboard-remaining-time/dashboard-remaining-time.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/dashboard.effects';
import { DashboardService } from './services/dashboard.service';
import { DashboardStore } from './store/dashboard.store';
import { DashboardUnfinishedGamesComponent } from './components/dashboard-unfinished-games/dashboard-unfinished-games.component';
import { DashboardFinishedGamesComponent } from './components/dashboard-finished-games/dashboard-finished-games.component';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EffectsModule.forFeature([DashboardEffects]),
  ],
  declarations: [
    DashboardComponent, 
    DashboardRemainingTimeComponent, 
    DashboardUnfinishedGamesComponent, 
    DashboardFinishedGamesComponent,
  ],
  exports: [],
  providers: [DashboardService, DashboardStore],
  })
export class DashboardModule { }
