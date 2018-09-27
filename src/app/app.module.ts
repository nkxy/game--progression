import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { GamesComponent } from './components/games/games.component';
import { AppHeaderComponent } from './components/header/header.component';
import { AppEffects } from './store/app.effects';
import { metaReducers, rootReducer } from './store/root-reducer';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AppStore } from './store/app.store';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    GamesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    StoreModule.forRoot(rootReducer, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production
      ? StoreDevtoolsModule.instrument({})
      : [],
  ],
  providers: [AppStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
