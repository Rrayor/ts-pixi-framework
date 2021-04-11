import { Game } from '@framework/game/game';
import { LogTarget } from '@framework/logger';
import { Logger } from '@framework/logger/logger';
import { ExampleGame } from 'example/entities/example-game';
import { Tile } from 'example/entities/tile';
import { TileMapComponent } from './framework/components/tilemap';
import { TransformComponent } from './framework/components/transform';
import { SpriteRenderer } from './framework/components/sprite-renderer';
import { TextureLoader } from './framework/components/texture-loader';
import tileset from './example/assets/copyright_tileset.png';
import { PixiService } from './framework/core/pixi-service';
import { SpriteLoader } from './framework/ecs/shared/sprite-loader';
import { AssetLoader } from './framework/components/asset-loader';

const logger: Logger = new Logger({ target: LogTarget.CONSOLE, name: 'App Logger' });

const game = new ExampleGame(document.body);

const tile = new Tile('tile');

const tileMap = new TileMapComponent({ name: 'tilemap', path: tileset }, { tileCountX: 12, tileCountY: 6, tileHeight: 16, tileWidth: 16 });

tile.addComponent(TransformComponent, new TransformComponent());
tile.addComponent(TileMapComponent, tileMap);

game.addToHierarchy(tile);

game.preInit();

// FIXME: Tilemap loads tiles on init. spriteRenderer needs the loaded tiles on construction
const spriteRenderer = new SpriteRenderer(new TextureLoader(tileMap.getTile(0, 1)));
tile.addComponent(SpriteRenderer, spriteRenderer);
game.init();
game.postInit();
PixiService.instance.run();
