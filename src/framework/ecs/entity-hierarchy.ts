import { Entity } from '@framework/ecs/core';
import { IDestroy, IInit, IPreDestroy, IPreInit, ITicking } from '@framework/ecs/shared';

import { IPostInit } from './shared/lifecycle';

export class EntityHierarchy implements IPreInit, IInit, IPostInit, ITicking, IPreDestroy, IDestroy {
    private _entities: Map<string, Entity> = new Map();

    public get entities(): Map<string, Entity> {
        return this._entities;
    }

    preInit(): void {
        this.preInitEntities();
    }
    init(): void {
        this.initEntities();
    }

    postInit(): void {
        this.postInitEntities();
    }

    tick(deltaTime: number): void {
        this.tickEntities(deltaTime);
    }
    preDestroy(): void {
        this.preDestroyEntities();
    }
    destroy(): void {
        this.destroyEntities();
    }

    private preInitEntities(): void {
        this._entities.forEach((entity: Entity) => entity.preInit());
    }

    private initEntities(): void {
        this._entities.forEach((entity: Entity) => entity.init());
    }

    private postInitEntities(): void {
        this._entities.forEach((entity: Entity) => entity.postInit());
    }

    private tickEntities(deltaTime: number): void {
        this._entities.forEach((entity: Entity) => entity.tick(deltaTime));
    }

    private preDestroyEntities(): void {
        this._entities.forEach((entity: Entity) => entity.preDestroy());
    }

    private destroyEntities(): void {
        this._entities.forEach((entity: Entity) => entity.destroy());
    }

    public addEntity(entity: Entity): void {
        this._entities.set(entity.id, entity);
    }

    public hasEntity(id: string): boolean {
        return this._entities.has(id);
    }

    public getEntity(id: string): Entity {
        return this._entities.get(id);
    }

    public removeEntity(id: string): void {
        const entity = this._entities.get(id);
        entity.preDestroy();
        entity.destroy();
        this._entities.delete(id);
    }
}
