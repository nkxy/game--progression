import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { DashboardService } from "../services/dashboard.service";
import { DashboardActions, RetrieveGames, RetrieveGamesSuccess, RetrieveGamesFailure } from "./dashboard.actions";
import { switchMap, map, catchError } from "rxjs/internal/operators";
import { of } from "rxjs";

@Injectable()
export class DashboardEffects {
    constructor(private actions$: Actions, private dashboardService: DashboardService) {}

    @Effect()
    public retrieveDashboard$ = this.actions$.pipe(
        ofType(DashboardActions.RETRIEVE_GAMES),
        () =>
            this.dashboardService.getDashboard().pipe(
                map(games => new RetrieveGamesSuccess(games)),
                catchError(error => of(new RetrieveGamesFailure(error)))
            )
    )
}