import { PixiService } from '@electron-app/framework/core/pixi-service';
import { Sprite } from '@electron-app/framework/core/pixi-types';
import { Entity } from '@electron-app/framework/ecs';
import { IComponent } from '@electron-app/framework/ecs/core/component';
import { SpriteLoader } from '@electron-app/framework/ecs/shared/sprite-loader';
import { IAsset } from '@electron-app/framework/shared/asset';

export class AssetLoader implements IComponent, SpriteLoader {
    entity: Entity | null = null;
    private _asset: IAsset;

    constructor(asset: IAsset) {
        this._asset = asset;
    }

    preInit(): void {
        PixiService.instance.addToLoader(this._asset);
    }

    init(): void {}
    postInit(): void {}
    tick(deltaTime: number): void {}
    preDestroy(): void {}
    destroy(): void {}

    public getSprite(): Sprite {
        return Sprite.from(this._asset.path);
    }

    public parseJSON<T>(): T {
        const json = PixiService.instance.getResource(this._asset.name).data;
        return JSON.parse(json);
    }
}
