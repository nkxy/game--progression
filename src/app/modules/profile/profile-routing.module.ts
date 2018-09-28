import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const profileRoutes: Routes = [
  {path: 'your-profile', redirectTo: '/your-profile/details', pathMatch: 'full'},
  {path: 'your-profile/details', component: ProfileComponent },
  {path: 'your-profile/edit', component: EditProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
