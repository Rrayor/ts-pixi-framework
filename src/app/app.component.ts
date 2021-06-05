import { Component, OnInit } from '@angular/core';
// import { runGame } from '@electron-app/index';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ts-pixi-framework';

  constructor(private gameService: GameService) {}

  async ngOnInit(): Promise<void> {
    const runGame = await this.gameService.getGame();

    runGame();
  }
}
