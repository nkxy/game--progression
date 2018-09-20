import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { AppState } from '../types/app-state/app-state.interface';
import { Game } from '../types/game/game.interface';

@Injectable()
export class AppStore {
  constructor(
    private store: Store<AppState>,
  ) {}

  public getGames(): Observable<Game[]> {
    return this.store.pipe(select(appState => appState.dashboardState.games));
  }
}