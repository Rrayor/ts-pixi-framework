import { TransformComponent } from '@electron-app/framework/components/transform';
import { PixiService } from '@electron-app/framework/core/pixi-service';
import { Sprite } from '@electron-app/framework/core/pixi-types';
import { Entity } from '@electron-app/framework/ecs';
import { IComponent } from '@electron-app/framework/ecs/core/component';
import { SpriteLoader } from '@electron-app/framework/ecs/shared';
import { Logger, LogLevel, LogTarget } from '@electron-app/framework/logger';

export class SpriteRenderer implements IComponent {
    entity: Entity;
    private _sprite: Sprite;
    private logger = new Logger({ target: LogTarget.CONSOLE, name: 'SpriteRenderer Logger' });
    private spriteLoader: SpriteLoader;

    public get sprite(): Sprite {
        return this._sprite;
    }

    constructor(spriteLoader: SpriteLoader) {
        this.spriteLoader = spriteLoader;
    }

    preInit(): void {
        if (!this.dependenciesPresent()) {
            throw new Error('[SpriteRenderer] One or more dependencies could not be resolved');
        }
    }
    init(): void {
        this.initializeSprite();
        PixiService.instance.addToStage(this._sprite);
    }

    postInit(): void {}
    tick(deltaTime: number): void {
        this.setSpriteValues();
    }
    preDestroy(): void {}
    destroy(): void {
        PixiService.instance.removeFromStage(this._sprite);
    }

    private dependenciesPresent(): boolean {
        try {
            return this.hasEntity() && this.entityHasTransformComponent();
        } catch (error) {
            this.logger.log({ message: error.message, level: LogLevel.ERROR, sender: this.entity.id + ' SpriteRenderer' });
        }
    }

    private hasEntity(): boolean {
        if (!this.entity) {
            // TODO: Better Error handling
            throw new Error('A Sprite renderer component needs a parent entity to work');
        }

        return true;
    }

    private entityHasTransformComponent(): boolean {
        if (!this.entity.getComponent(TransformComponent)) {
            throw new Error('A Sprite renderer needs a transform component on parent entity to work');
        }

        return true;
    }

    private initializeSprite(): void {
        this._sprite = this.spriteLoader.getSprite();
        this.setSpriteValues();
    }

    private setSpriteValues(): void {
        if (!this._sprite) {
            // TODO: Change this
            throw new Error('Sprite was not created');
        }

        const transform = this.entity.getComponent(TransformComponent);
        this._sprite.x = transform.position.x;
        this._sprite.y = transform.position.y;
        this._sprite.rotation = transform.rotation;
        this._sprite.scale.x = transform.scale.x;
        this._sprite.scale.y = transform.scale.y;
    }
}
