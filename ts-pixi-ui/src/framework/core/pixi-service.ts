import { Application, DisplayObject, Loader } from '@framework/core/pixi-types';
import { Game } from '@framework/game/game';
import { IAsset } from '@framework/shared/asset';
import { ILoaderResource } from '@pixi/loaders';

import { LevelLoaderPlugin } from './level-loader';
import { PixiSettings } from './settings/pixi-settings';

export class PixiService {
    private static _instance: PixiService;
    private pixiApp: Application;
    private game: Game;

    public static get instance(): PixiService {
        return PixiService._instance;
    }

    private constructor() {}

    public static create(game: Game, pixiSettings: PixiSettings): void {
        if (!PixiService.instance) {
            PixiService._instance = new PixiService();
        }

        Loader.registerPlugin(LevelLoaderPlugin);
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

    public getResource(name: string): ILoaderResource {
        return PixiService.instance.pixiApp.loader.resources[name];
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

        loader.onError.add((error: any) => PixiService.instance.onPixiError(error));
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