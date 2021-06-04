import { Entity } from '@framework/ecs/core/entity';
import { IDestroy, IInit, IPostInit, IPreDestroy, IPreInit, ITicking } from '@framework/ecs/shared/lifecycle';

export interface IComponent extends IPreInit, IInit, IPostInit, ITicking, IPreDestroy, IDestroy {
    entity: Entity;
    preInit(): void;
    init(): void;
    postInit(): void;
    tick(deltaTime: number): void;
    preDestroy(): void;
    destroy(): void;
}
