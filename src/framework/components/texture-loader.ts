import { Sprite, Texture } from '@framework/core/pixi-types';
import { Entity } from '@framework/ecs';
import { IComponent } from '@framework/ecs/core/component';
import { SpriteLoader } from '@framework/ecs/shared/sprite-loader';

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
