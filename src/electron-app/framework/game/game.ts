import { PixiService } from '@electron-app/framework/core/pixi-service';
import { Entity } from '@electron-app/framework/ecs';
import { EntityHierarchy } from '@electron-app/framework/ecs/entity-hierarchy';
import { IDestroy, IInit, IPreDestroy, IPreInit, ITicking } from '@electron-app/framework/ecs/shared/lifecycle';

import { AppSettings } from '../core/settings/app-settings';

export class Game implements IPreInit, IInit, ITicking, IPreDestroy, IDestroy {
    private readonly hierarchy: EntityHierarchy;

    public get appSettings(): AppSettings {
        return this._appSettings;
    }

    constructor(private readonly rootElement: HTMLElement, private _appSettings: AppSettings = new AppSettings()) {
        this.hierarchy = new EntityHierarchy();
    }

    preInit(): void {
        PixiService.create(this, this._appSettings.pixiSettings);
        PixiService.instance.appendView(this.rootElement);
        this.hierarchy.preInit();
    }
    init(): void {
        PixiService.instance.load();
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

    public addToHierarchy(entity: Entity): void {
        entity.game = this;
        this.hierarchy.addEntity(entity);
    }

    public removeFromHierarchy(id: string): void {
        this.hierarchy.removeEntity(id);
    }
}
