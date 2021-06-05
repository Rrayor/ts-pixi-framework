import { Entity } from '@electron-app/framework/ecs';
import { IComponent } from '@electron-app/framework/ecs/core/component';
import { Vector2 } from '@electron-app/framework/shared/vector2';

export class TransformComponent implements IComponent {
    entity: Entity | null = null;
    position: Vector2 = new Vector2();
    rotation: number = 0;
    scale: Vector2 = new Vector2(1, 1);

    preInit(): void {}
    init(): void {}
    postInit(): void {}
    tick(deltaTime: number): void {}
    preDestroy(): void {}
    destroy(): void {}
}
