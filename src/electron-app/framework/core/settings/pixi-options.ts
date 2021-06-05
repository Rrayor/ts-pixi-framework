export enum ScaleModes {
    LINEAR = 'LINEAR',
    NEAREST = 'NEARES',
}

export interface IPixiOptions {
    width?: number;
    height?: number;
    resolution?: number;
    scaleMode?: ScaleModes;
}
