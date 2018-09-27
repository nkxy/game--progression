import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../../types/game/game.interface';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient) {}

    public getDashboard() {
        return this.http.get<Game[]>('http://localhost:3004/games');
    }
}