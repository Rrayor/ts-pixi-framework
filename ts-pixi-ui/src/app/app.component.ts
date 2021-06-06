import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { runGame } from '../example-game/run-game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(protected translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en-US');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en-US');
  }

  ngOnInit(): void {
    runGame();
  }
}
