import { DashboardState } from '../types/dashboard-state/dashboard-state.interface';
import { Action } from '@ngrx/store';
import { createDashboardState } from '../types/dashboard-state/dashboard-state.functions';
import { DashboardActions, RetrieveGamesSuccess } from './dashboard.actions';

export function dashboardReducer(
    state: DashboardState = createDashboardState(), 
    action: Action,
): DashboardState {
    switch (action.type) {
        case DashboardActions.RETRIEVE_GAMES_SUCCESS:
            const retrieveGamesSuccess = action as RetrieveGamesSuccess;
            return {
                ...state,
                games: retrieveGamesSuccess.games,
            }
        case DashboardActions.RETRIEVE_GAMES_FAILURE:
        case DashboardActions.RETRIEVE_GAMES:
            return state;
        default:
            return state;
    }
}