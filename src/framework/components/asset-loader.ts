import { PixiService } from '@framework/core/pixi-service';
import { Entity } from '@framework/ecs';
import { IComponent } from '@framework/ecs/core/component';
import { IAsset } from '@framework/shared/asset';
import { Sprite } from '@framework/core/pixi-types';
import { SpriteLoader } from '@framework/ecs/shared/sprite-loader';

export class AssetLoader implements IComponent, SpriteLoader {
    entity: Entity;
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
}
