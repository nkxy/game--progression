import { Component, OnChanges, Input } from '@angular/core';
import { Game } from '../../../../types/game/game.interface';
import { getUnfinishedGames } from '../../../../types/game/game.functions';

@Component({
  selector: 'app-dashboard-unfinished-games',
  templateUrl: './dashboard-unfinished-games.component.html',
  styleUrls: ['./dashboard-unfinished-games.component..scss']
})
export class DashboardUnfinishedGamesComponent implements OnChanges {
  @Input()
  public games: Game[];
  
  public unfinishedGames: number;

  public ngOnChanges(): void {
    this.unfinishedGames = getUnfinishedGames(this.games);
  }
}