import { Game } from './game.interface';

export function getGamesTimeRemaining(games: Game[]): number {
    return games
        .map(game => game.numberOfHoursToComplete)
        .reduce((total, gameTimeRemaining) => gameTimeRemaining + total, 0);
}

export function getUnfinishedGames(games: Game[]): number {
    return games
        .filter(game => !game.isComplete)
        .length
}

export function getFinishedGames(games: Game[]): number {
    return games.length - getUnfinishedGames(games);
}