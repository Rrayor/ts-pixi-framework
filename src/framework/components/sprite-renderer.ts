import { Entity } from '@framework/ecs';
import { IComponent } from '@framework/ecs/core/component';
export class SpriteRenderer implements IComponent {
    entity: Entity;

    preInit(): void {
        throw new Error('Method not implemented.');
    }
    init(): void {
        throw new Error('Method not implemented.');
    }
    postInit(): void {
        throw new Error('Method not implemented.');
    }
    tick(deltaTime: number): void {
        throw new Error('Method not implemented.');
    }
    preDestroy(): void {
        throw new Error('Method not implemented.');
    }
    destroy(): void {
        throw new Error('Method not implemented.');
    }
}
