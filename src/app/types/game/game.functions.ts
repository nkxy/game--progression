import { Game } from './game.interface';

export function getGamesTimeRemaining(games: Game[]): number {
    return games
        .map(game => game.numberOfHoursToComplete)
        .reduce((total, gameTimeRemaining) => gameTimeRemaining + total, 0);
}