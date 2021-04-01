import { Entity } from '@framework/ecs';
import { IComponent } from '@framework/ecs/core/component';
import { AssetLoader } from '@framework/components/asset-loader';
import { IAsset } from '@framework/shared/asset';
import { Texture, Resource, Rectangle } from '@framework/core/pixi-types';
import { TileConfig } from '../ecs/shared/tile-config';

interface TilePos {
    x: number;
    y: number;
    tilePosX: number;
    tilePosY: number;
}

export class TileMapComponent implements IComponent {
    entity: Entity;
    private assetLoader: AssetLoader;
    private readonly tileConfig: TileConfig;
    private _tiles: Texture<Resource>[][] = [[]];

    constructor(asset: IAsset, tileConfig: TileConfig) {
        this.assetLoader = new AssetLoader(asset);
        this.tileConfig = tileConfig;
    }

    preInit(): void {
        this.assetLoader.preInit();
    }
    init(): void {
        this.loadTiles();
    }
    postInit(): void {}
    tick(deltaTime: number): void {}
    preDestroy(): void {}
    destroy(): void {}

    private loadTiles(): void {
        const sprite = this.assetLoader.getSprite();

        for (let i = 0; i < this.tileConfig.tileCountX * this.tileConfig.tileCountY; i++) {
            const { x, y, tilePosX, tilePosY } = this.calculateTilePosition(i);

            const texture = new Texture(sprite.texture.baseTexture, new Rectangle(tilePosX, tilePosY, this.tileConfig.tileWidth, this.tileConfig.tileHeight));

            if (!this._tiles[x]) this._tiles[x] = [];
            this._tiles[x][y] = texture;
        }
    }

    private calculateTilePosition(index: number): TilePos {
        const x = index % this.tileConfig.tileCountX;
        const y = Math.floor(index / this.tileConfig.tileCountX);
        const tilePosX = x * this.tileConfig.tileWidth;
        const tilePosY = y * this.tileConfig.tileHeight;

        return {
            x,
            y,
            tilePosX,
            tilePosY,
        };
    }
}
