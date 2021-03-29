import { Entity } from '@framework/ecs';
import { EntityHierarchy } from '@framework/ecs/entity-hierarchy';
import { PixiService } from '../core/pixi-service';
import { IComponent } from '../ecs/core/component';
import { IPreDestroy, IDestroy, IInit, IPreInit, ITicking } from '@framework/ecs/shared/lifecycle';

export class Game implements IPreInit, IInit, ITicking, IPreDestroy, IDestroy {
    private readonly hierarchy = new EntityHierarchy();
    private readonly pixiService = new PixiService(this.tick);

    preInit(): void {
        this.hierarchy.preInit();
    }
    init(): void {
        this.hierarchy.init();
    }
    postInit(): void {
        this.hierarchy.postInit();
    }
    tick(deltaTime: number): void {
        this.hierarchy.tick(deltaTime);
    }
    preDestroy(): void {
        this.hierarchy.preDestroy();
    }
    destroy(): void {
        this.hierarchy.destroy();
    }

    public addToHierarchy(entity: Entity) {
        this.hierarchy.addEntity(entity);
    }

    public removeFromHierarchy(id: string) {
        this.hierarchy.removeEntity(id);
    }
}
