import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../../environments/environment';
import { AppState } from '../types/app-state/app-state.interface';
import { dashboardReducer } from '../modules/dashboard/store/dashboard.reducer';

export const rootReducer: ActionReducerMap<AppState> = {
  dashboardState: dashboardReducer,
};

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger({
    collapsed: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<AppState>> = !environment.production ? [] : [logger];