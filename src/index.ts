import { SpriteRenderer } from '@framework/components/sprite-renderer';
import { TextureLoader } from '@framework/components/texture-loader';
import { TileMapComponent } from '@framework/components/tilemap';
import { TransformComponent } from '@framework/components/transform';
import { PixiService } from '@framework/core/pixi-service';
import { CenterScript } from 'example/components/center-script';
import { ExampleGame } from 'example/entities/example-game';
import { Tile } from 'example/entities/tile';

import tileset from './example/assets/copyright_tileset.png';
import { RotateScript } from './example/components/rotate-script';

const game = new ExampleGame(document.body);

const tile = new Tile('tile');
const tileMap = new TileMapComponent({ name: 'tileset', path: tileset }, { name: 'level', path: './src/example/assets/level.json' });

tile.addComponent(TileMapComponent, tileMap);
game.addToHierarchy(tile);
game.preInit();

game.init();
game.postInit();
PixiService.instance.run();
