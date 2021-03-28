import { EventTypes } from '@framework/core/constants/event-types';
import { IAsset } from '@framework/shared/asset';
import { Application, Loader } from 'pixi.js';

export class PixiService {
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
        this.pixiApp.ticker.add(this.tick);
    }

    private tick(deltaTime: number) {
        this.pixiApp.ticker.add((deltaTime) => new CustomEvent(EventTypes.TICK, { detail: { deltaTime } }));
    }
}
