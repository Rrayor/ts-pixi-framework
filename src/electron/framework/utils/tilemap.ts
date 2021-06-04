import { TileConfig } from '../ecs/shared/tile-config';
export class TileMap {
    width: number;
    height: number;
    tileSize: number;
    layers: number[][];
    tileConfig: TileConfig;

    constructor(width: number, height: number, tileSize: number, layers: number[][], tileConfig: TileConfig) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.layers = layers;
        this.tileConfig = tileConfig;
    }
}
