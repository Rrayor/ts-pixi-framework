import { TileMapComponent } from '@framework/components/tilemap';
import { PixiService } from '@framework/core/pixi-service';
import { ExampleGame } from 'example/entities/example-game';
import { Tile } from 'example/entities/tile';

import tileset from './example/assets/copyright_tileset.png';
import level from './example/assets/level.level';

const game = new ExampleGame(document.body);

const tile = new Tile('tile');
const tileMap = new TileMapComponent({ name: 'tileset', path: tileset }, { name: 'level', path: level });

tile.addComponent(TileMapComponent, tileMap);
game.addToHierarchy(tile);
game.preInit();

game.init();
game.postInit();
PixiService.instance.run();
