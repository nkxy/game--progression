import { Action } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import { Game } from '../../../types/game/game.interface';

export const DashboardActions = {
    RETRIEVE_GAMES: 'DASHBOARD--RETRIEVE_GAMES',
    RETRIEVE_GAMES_SUCCESS: 'DASHBOARD--RETRIEVE_GAMES_SUCCESS',
    RETRIEVE_GAMES_FAILURE: 'DASHBOARD--RETRIEVE_GAMES_FAILURE',
};

export class RetrieveGames implements Action {
    public readonly type = DashboardActions.RETRIEVE_GAMES;
}

export class RetrieveGamesSuccess implements Action {
    public readonly type = DashboardActions.RETRIEVE_GAMES_SUCCESS;
    constructor(public games: Game[]) {}
}

export class RetrieveGamesFailure implements Action {
    public readonly type = DashboardActions.RETRIEVE_GAMES_FAILURE;
    constructor(public error: HttpErrorResponse) {}
}

