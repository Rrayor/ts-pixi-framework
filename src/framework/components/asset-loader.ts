import { PixiService } from '@framework/core/pixi-service';
import { Sprite } from '@framework/core/pixi-types';
import { Entity } from '@framework/ecs';
import { IComponent } from '@framework/ecs/core/component';
import { SpriteLoader } from '@framework/ecs/shared/sprite-loader';
import { IAsset } from '@framework/shared/asset';

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

    public parseJSON(): unknown {
        const json = PixiService.instance.getResource(this._asset.name).data;
        return JSON.parse(json);
    }
}
