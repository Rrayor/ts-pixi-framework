import { Entity } from '@electron-app/framework/ecs';

import { IComponent } from '../ecs/core/component';

export class ScriptComponent implements IComponent {
    entity: Entity;

    preInit(): void {
        throw new Error('Script components are not allowed to run in preInit phase.');
    }

    init(): void {}
    postInit(): void {}
    tick(deltaTime: number): void {}
    preDestroy(): void {}
    destroy(): void {}
}
