import { PixiService } from '@framework/core/pixi-service';
import { Sprite } from '@framework/core/pixi-types';
import { SpriteLoader } from '@framework/ecs/shared/sprite-loader';
import { IAsset } from '@framework/shared/asset';

import { IPreInit } from '../ecs/shared/lifecycle';

export class AssetLoader implements IPreInit, SpriteLoader {
    private _asset: IAsset;

    constructor(asset: IAsset) {
        this._asset = asset;
    }

    preInit(): void {
        PixiService.instance.addToLoader(this._asset);
    }

    public getSprite(): Sprite {
        return Sprite.from(this._asset.path);
    }
}
