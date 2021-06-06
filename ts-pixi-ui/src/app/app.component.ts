import { Component, OnInit } from '@angular/core';
import { runGame } from '../example-game/run-game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    runGame();
  }
}
