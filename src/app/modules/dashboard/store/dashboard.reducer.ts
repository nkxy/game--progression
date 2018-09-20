import { DashboardState } from "../types/dashboard-state/dashboard-state.interface";
import { Action } from "@ngrx/store";
import { createDashboardState } from "../types/dashboard-state/dashboard-state.functions";

export function dashboardReducer(
    state: DashboardState = createDashboardState(), 
    action: Action,
): DashboardState {
    return state;
}