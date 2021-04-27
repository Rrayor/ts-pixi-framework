import { IPixiOptions, ScaleModes } from './pixi-options';

export class PixiSettings implements IPixiOptions {
    public width = 400;
    public height = 300;
    public resolution = 2;
    public scaleMode = ScaleModes.NEAREST;

    constructor(width?: number, height?: number, resolution?: number, scaleMode?: ScaleModes) {
        if (width) {
            this.width = width;
        }

        if (height) {
            this.height = height;
        }

        if (resolution) {
            this.resolution = resolution;
        }

        if (scaleMode) {
            this.scaleMode = scaleMode;
        }
    }
}
