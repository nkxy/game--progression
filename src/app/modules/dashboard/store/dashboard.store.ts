import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from '../../../store/app.store';
import { Game } from '../../../types/game/game.interface';
import { AppState } from '../../../types/app-state/app-state.interface';
import { map } from 'rxjs/internal/operators';
import { DashboardState } from '../types/dashboard-state/dashboard-state.interface';
import { RetrieveGames } from './dashboard.actions';

@Injectable()
export class DashboardStore {
  constructor(
    private appStore: AppStore,
    private store: Store<AppState>,
  ) {}

  // selectors
  public getDashboardState(): Observable<DashboardState> {
    return this.appStore.getAppState().pipe(map(appState => appState.dashboardState));
  }

  public getGames(): Observable<Game[]> {
    return this.getDashboardState().pipe(map(state => state.games));
  }

  // actions
  public retrieveGames(): void {
      this.store.dispatch(new RetrieveGames());
  }
}