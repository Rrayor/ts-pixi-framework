import { TileMapComponent } from '@electron-app/framework/components/tilemap';
import { PixiService } from '@electron-app/framework/core/pixi-service';
import { ExampleGame } from '@electron-app/example/entities/example-game';
import { Tile } from '@electron-app/example/entities/tile';
import path from 'path';

export const runGame = (): void => {
    const game = new ExampleGame(document.body);

    const tilesetPath = 'src/electron-app/example/assets/copyright_tileset.png';
    const levelPath = 'src/electron-app/example/assets/level.level';

    const tile = new Tile('tile');
    const tileMap = new TileMapComponent({ name: 'tileset', path: path.join(__dirname, tilesetPath) }, { name: 'level', path: path.join(__dirname, levelPath) });

    tile.addComponent(TileMapComponent, tileMap);
    game.addToHierarchy(tile);
    game.preInit();

    game.init();
    game.postInit();
    PixiService.instance.run();

};
