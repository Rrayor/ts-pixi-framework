import { Application, DisplayObject, Loader } from '@framework/core/pixi-types';
import { Game } from '@framework/game/game';
import { IAsset } from '@framework/shared/asset';

import { PixiSettings } from './settings/pixi-settings';

export class PixiService {
    private pixiApp: Application;
    private game: Game;
    private static _instance: PixiService;

    public static get instance(): PixiService {
        return PixiService._instance;
    }

    private constructor() {}

    public static create(game: Game, pixiSettings: PixiSettings): void {
        if (!PixiService.instance) {
            PixiService._instance = new PixiService();
        }

        PixiService.instance.pixiApp = new Application(pixiSettings);
        PixiService.instance.game = game;
    }

    public appendView(element: HTMLElement) {
        element.appendChild(PixiService.instance.pixiApp.view);
    }

    public addToLoader(asset: IAsset): void {
        PixiService.instance.pixiApp.loader.add(asset.name, asset.path);
    }

    public load(): void {
        PixiService.instance.pixiApp.loader.load(PixiService.instance.onAssetsLoaded);
    }

    public addToStage(displayObject: DisplayObject): void {
        PixiService.instance.pixiApp.stage.addChild(displayObject);
    }

    public removeFromStage(displayObject: DisplayObject): void {
        PixiService.instance.pixiApp.stage.removeChild(displayObject);
    }

    public run(): void {
        PixiService.instance.pixiApp.renderer.render(PixiService.instance.pixiApp.stage);
    }

    private onAssetsLoaded(loader: Loader, resources: unknown) {
        PixiService.instance.pixiApp.ticker.add(PixiService.instance.tick);

        loader.onError = (error: any) => PixiService.instance.onPixiError(error);
    }

    private tick(deltaTime: number) {
        if (!PixiService.instance.game) {
            throw new Error('No game defined for Pixi tick');
        }

        PixiService.instance.game.tick(deltaTime);
    }

    private onPixiError(error: any) {
        console.error(error);
    }
}
