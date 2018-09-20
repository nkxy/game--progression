import { DashboardState } from './dashboard-state.interface';

// some sort of setting of defaults here for the dashboard state. 
export function createDashboardState(): DashboardState {
    return {
        games: [],
    };
}