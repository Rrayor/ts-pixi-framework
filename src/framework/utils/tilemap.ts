export class TileMap {
    width: number;
    height: number;
    tileSize: number;
    layers: number[][];

    constructor(width: number, height: number, tileSize: number, layers: number[][]) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.layers = layers;
    }
}
