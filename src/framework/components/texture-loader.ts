import { Sprite, Texture } from '@framework/core/pixi-types';
import { SpriteLoader } from '@framework/ecs/shared/sprite-loader';

export class TextureLoader implements SpriteLoader {
    private _texture: Texture;

    constructor(texture: Texture) {
        this._texture = texture;
    }

    public getSprite(): Sprite {
        return new Sprite(this._texture);
    }
}
