import { Action } from "@ngrx/store";

import { HttpErrorResponse } from "@angular/common/http";
import { Game } from "../types/game/game.interface";

export const AppActions = {
    RETRIEVE_GAMES: 'APP--RETRIEVE_GAMES',
    RETRIEVE_GAMES_SUCCESS: 'APP--RETRIEVE_GAMES_SUCCESS',
    RETRIEVE_GAMES_FAILURE: 'APP--RETRIEVE_GAMES_FAILURE',
};

export class RetrieveGames implements Action {
    public readonly type = AppActions.RETRIEVE_GAMES;
}

export class RetrieveGamesSuccess implements Action {
    public readonly type = AppActions.RETRIEVE_GAMES_SUCCESS;
    constructor(public games: Game[]) {}
}

export class RetrieveGamesFailure implements Action {
    public readonly type = AppActions.RETRIEVE_GAMES_FAILURE;
    constructor(public error: HttpErrorResponse) {}
}

