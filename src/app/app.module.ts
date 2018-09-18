import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/root-reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { AppHeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
