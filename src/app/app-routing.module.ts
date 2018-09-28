import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes), DashboardModule],
})
export class AppRoutingModule {}
