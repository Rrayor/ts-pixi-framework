import { IPreInit, IInit, IPostInit, ITicking, IPreDestroy, IDestroy } from '@framework/ecs/shared/lifecycle';
import { Entity } from '@framework/ecs/entity';

export interface IComponent extends IPreInit, IInit, IPostInit, ITicking, IPreDestroy, IDestroy {
    entity: Entity;
    preInit(): void;
    init(): void;
    postInit(): void;
    tick(deltaTime: number): void;
    preDestroy(): void;
    destroy(): void;
}
