import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Game } from '../../../../types/game/game.interface';
import { getFinishedGames } from '../../../../types/game/game.functions';

@Component({
  selector: 'app-dashboard-finished-games',
  templateUrl: './dashboard-finished-games.component.html',
  styleUrls: ['./dashboard-finished-games.component..scss'],
})
export class DashboardFinishedGamesComponent implements OnChanges {
  @Input()
  public games: Game[];

  public finishedGames: number;

  public ngOnChanges(): void {
    this.finishedGames = getFinishedGames(this.games);
  }
}
