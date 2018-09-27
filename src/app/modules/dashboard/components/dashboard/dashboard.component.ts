import { Component, OnInit } from '@angular/core';
import { DashboardStore } from '../../store/dashboard.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dashboardStore: DashboardStore) {
    dashboardStore.retrieveGames();
  }
  public ngOnInit() {}
}
