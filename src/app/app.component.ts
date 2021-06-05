import { Component, OnInit } from '@angular/core';
import { runGame } from '@electron-app/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ts-pixi-framework';

  ngOnInit(): void {
    runGame();
  }
}
