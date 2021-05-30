import { AssetLoader } from '@framework/components/asset-loader';
import { Rectangle, Resource, Sprite, Texture } from '@framework/core/pixi-types';
import { Entity } from '@framework/ecs';
import { IComponent } from '@framework/ecs/core/component';
import { TileConfig } from '@framework/ecs/shared/tile-config';
import { IAsset } from '@framework/shared/asset';
import { TileMapLoader } from '@framework/utils/tile-map-loader';
import { PixiService } from '../core/pixi-service';

interface TilePos {
    tilePosX: number;
    tilePosY: number;
}

export class TileMapComponent implements IComponent {
    entity: Entity;
    private atlasAssetLoader: AssetLoader;
    private tileMapLoader: TileMapLoader;
    private tileConfig: TileConfig;
    private _tiles: Texture<Resource>[] = [];

    constructor(atlas: IAsset, tileMap: IAsset) {
        this.atlasAssetLoader = new AssetLoader(atlas);
        this.tileMapLoader = new TileMapLoader(new AssetLoader(tileMap));
    }

    preInit(): void {
        this.atlasAssetLoader.preInit();
        this.tileMapLoader.preInit();
    }
    init(): void {
        this.tileMapLoader.loadMap();
        this.tileConfig = this.tileMapLoader.map.tileConfig;
        this.loadTileTextures();
        for (const layer of this.tileMapLoader.map.layers) {
            for (let y = 0; y < this.tileMapLoader.map.height; y++) {
                for (let x = 0; x < this.tileMapLoader.map.width; x++) {
                    const tileIndex = layer[x * y];
                    const tile = new Sprite(this._tiles[tileIndex]);
                    tile.x = x * this.tileConfig.tileWidth;
                    tile.y = y * this.tileConfig.tileHeight;
                    PixiService.instance.addToStage(tile);
                }
            }
        }
    }
    postInit(): void {}
    tick(deltaTime: number): void {}
    preDestroy(): void {}
    destroy(): void {}

    private loadTileTextures(): void {
        const sprite = this.atlasAssetLoader.getSprite();

        for (let i = 0; i < this.tileConfig.tileCountX * this.tileConfig.tileCountY; i++) {
            const { tilePosX, tilePosY } = this.calculateTilePosition(i);

            this._tiles[i] = new Texture(sprite.texture.baseTexture, new Rectangle(tilePosX, tilePosY, this.tileConfig.tileWidth, this.tileConfig.tileHeight));
        }
    }

    private calculateTilePosition(index: number): TilePos {
        const x = index % this.tileConfig.tileCountX;
        const y = Math.floor(index / this.tileConfig.tileCountX);
        const tilePosX = x * this.tileConfig.tileWidth;
        const tilePosY = y * this.tileConfig.tileHeight;

        return {
            tilePosX,
            tilePosY,
        };
    }
}
