import { AssetLoader } from '@framework/components/asset-loader';
import { TileMap } from './tilemap';

export class TileMapLoader {
    private _map: TileMap;
    private readonly assetLoader: AssetLoader;

    public get map(): TileMap {
        if (!this._map) {
            throw new Error('map is not loaded yet');
        }

        return this._map;
    }

    constructor(assetLoader: AssetLoader) {
        this.assetLoader = assetLoader;
    }

    preInit(): void {
        this.assetLoader.preInit();
    }

    loadMap(): void {
        this._map = this.assetLoader.parseJSON<TileMap>();
    }
}
