import { PixiService } from '@framework/core/pixi-service';
import { ExampleGame } from '@example-game/entities/example-game';

// import tileset from '@example-game/assets/copyright_tileset.png';
// import level from '@example-game/assets/level.level';

export function runGame(): void {
    const game = new ExampleGame(document.body);

    // const tile = new Tile('tile');
    // const tileMap = new TileMapComponent({ name: 'tileset', path: tileset }, { name: 'level', path: level });

    // tile.addComponent(TileMapComponent, tileMap);
    // game.addToHierarchy(tile);
    game.preInit();

    game.init();
    game.postInit();
    PixiService.instance.run();
}
