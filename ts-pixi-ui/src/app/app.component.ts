import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private gameService: GameService) {}

  async ngOnInit(): Promise<void> {
    await this.gameService.getGame();
  }
}
