import { IAsset } from '@framework/shared/asset';
import EventEmitter from 'node:events';
import { Application, Loader, Resource, resources } from 'pixi.js';

export class PixiProvider {
    private readonly pixiApp: Application;

    constructor() {
        this.pixiApp = new Application();
    }

    public addToLoader(asset: IAsset): void {
        this.pixiApp.loader.add(asset.name, asset.path);
    }

    public load(): void {
        this.pixiApp.loader.load(this.onAssetsLoaded);
    }

    private onAssetsLoaded(loader: Loader, resources: unknown) {
        console.log(typeof resources);
    }

    private tick(deltaTime: number) {
        this.pixiApp.ticker.add((deltaTime) => new CustomEvent('tick', { detail: deltaTime }));
    }
}
