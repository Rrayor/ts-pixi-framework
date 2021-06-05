import { Sprite, Texture } from '@electron-app/framework/core/pixi-types';
import { Entity } from '@electron-app/framework/ecs';
import { IComponent } from '@electron-app/framework/ecs/core/component';
import { SpriteLoader } from '@electron-app/framework/ecs/shared/sprite-loader';

export class TextureLoader implements IComponent, SpriteLoader {
    entity: Entity;
    private _texture: Texture;

    constructor(texture: Texture) {
        this._texture = texture;
    }

    preInit(): void {}
    init(): void {}
    postInit(): void {}
    tick(deltaTime: number): void {}
    preDestroy(): void {}
    destroy(): void {}

    public getSprite(): Sprite {
        return new Sprite(this._texture);
    }
}
