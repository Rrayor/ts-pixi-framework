import { Sprite } from '@framework/core/pixi-types';

export interface SpriteLoader {
    getSprite(): Sprite;
}
