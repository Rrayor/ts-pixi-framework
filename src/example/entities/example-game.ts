import { Game } from '@framework/game/game';

import { Tile } from './tile';

export class ExampleGame extends Game {
  constructor() {
    super();
    this.addToHierarchy(new Tile());
  }
}
