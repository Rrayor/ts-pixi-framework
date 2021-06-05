import { Sprite } from '@electron-app/framework/core/pixi-types';

export interface SpriteLoader {
    getSprite(): Sprite;
}
