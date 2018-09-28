import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule
  ,
    ProfileRoutingModule],
  declarations: [ProfileComponent, EditProfileComponent],
})
export class ProfileModule { }
