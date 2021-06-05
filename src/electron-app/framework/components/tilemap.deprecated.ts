import { AssetLoader } from '@electron-app/framework/components/asset-loader';
import { Rectangle, Resource, Texture } from '@electron-app/framework/core/pixi-types';
import { Entity } from '@electron-app/framework/ecs';
import { IComponent } from '@electron-app/framework/ecs/core/component';
import { TileConfig } from '@electron-app/framework/ecs/shared/tile-config';
import { IAsset } from '@electron-app/framework/shared/asset';

interface TilePos {
    x: number;
    y: number;
    tilePosX: number;
    tilePosY: number;
}

export class TileMapDeprecatedComponent implements IComponent {
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
        this.loadTiles();
    }
    init(): void {}
    postInit(): void {}
    tick(deltaTime: number): void {}
    preDestroy(): void {}
    destroy(): void {}

    public getTile(x: number, y: number): Texture {
        return this._tiles[x][y];
    }

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
