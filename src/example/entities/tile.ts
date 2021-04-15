import { TransformComponent } from '@framework/components';
import { AppSettings } from '@framework/core/constants/app-settings';
import { Entity } from '@framework/ecs/core/entity';

export class Tile extends Entity {
    private transform: TransformComponent;

    init(): void {
        this.transform = this.getComponent(TransformComponent);
        this.transform.position = { x: AppSettings.PIXI_OPTIONS.width / 2, y: AppSettings.PIXI_OPTIONS.height / 2 };
        super.init();
    }

    tick(deltaTime: number): void {
        this.transform.rotation += 0.1 * deltaTime;
        super.tick(deltaTime);
    }
}
