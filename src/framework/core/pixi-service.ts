import { IAsset } from '@framework/shared/asset';
import { Application, DisplayObject, Loader } from '@framework/core/pixi-types';

export class PixiService {
    private readonly pixiApp: Application = new Application();
    private tickCallback: (deltaTime: number) => void;
    private static _instance: PixiService;

    public static get instance(): PixiService {
        return PixiService._instance;
    }

    private constructor() {}

    public static create(tickCallback: (deltaTime: number) => void): void {
        if (!PixiService._instance) {
            PixiService._instance = new PixiService();
        }

        PixiService._instance.tickCallback = tickCallback;
    }

    public addToLoader(asset: IAsset): void {
        this.pixiApp.loader.add(asset.name, asset.path);
    }

    public load(): void {
        this.pixiApp.loader.load(this.onAssetsLoaded);
    }

    public addToStage(displayObject: DisplayObject): void {
        this.pixiApp.stage.addChild(displayObject);
    }

    public removeFromStage(displayObject: DisplayObject): void {
        this.pixiApp.stage.removeChild(displayObject);
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
