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
const tileMap = new TileMapComponent({ name: 'tilemap', path: tileset }, { tileCountX: 12, tileCountY: 6, tileHeight: 16, tileWidth: 16 });

tile.addComponent(TransformComponent, new TransformComponent());
tile.addComponent(TileMapComponent, tileMap);
game.addToHierarchy(tile);
game.preInit();

const spriteRenderer = new SpriteRenderer(new TextureLoader(tileMap.getTile(0, 1)));
tile.addComponent(SpriteRenderer, spriteRenderer);
tile.addComponent(CenterScript, new CenterScript());
tile.addComponent(RotateScript, new RotateScript());
game.init();
game.postInit();
PixiService.instance.run();
