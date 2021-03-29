import { EventTypes } from '@framework/core/constants/event-types';
import { IAsset } from '@framework/shared/asset';
import { Application, DisplayObject, Loader } from 'pixi.js';

export class PixiService {
    private readonly pixiApp: Application = new Application();

    constructor(private tickCallback: (deltaTime: number) => void) {}

    public addToLoader(asset: IAsset): void {
        this.pixiApp.loader.add(asset.name, asset.path);
    }

    public load(): void {
        this.pixiApp.loader.load(this.onAssetsLoaded);
    }

    public addToStage(displayObject: DisplayObject): void {
        this.pixiApp.stage.addChild(displayObject);
    }

    private onAssetsLoaded(loader: Loader, resources: unknown) {
        this.pixiApp.ticker.add(this.tick);

        loader.onError((error: any) => this.onPixiError(error));
    }

    private tick(deltaTime: number) {
        if (!this.tickCallback) {
            throw new Error('No callback function defined for Pixi tick');
        }

        this.tickCallback(deltaTime);
    }

    private onPixiError(error: any) {
        console.error(error);
    }
}
