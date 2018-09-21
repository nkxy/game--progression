import { Component, Input, OnChanges } from '@angular/core';
import { Game } from '../../../../types/game/game.interface';
import { getGamesTimeRemaining } from '../../../../types/game/game.functions';

@Component({
  selector: 'app-dashboard-remaining-time',
  templateUrl: './dashboard-remaining-time.component.html',
  styleUrls: ['./dashboard-remaining-time.component..scss']
})
export class DashboardRemainingTimeComponent implements OnChanges {
  @Input()
  public games: Game[];

  public timeRemaining: number;

  public ngOnChanges(): void {
    this.timeRemaining = getGamesTimeRemaining(this.games);
  }
}
