import { TransformComponent } from '@framework/components';
import { Entity } from '@framework/ecs/core/entity';

export class Tile extends Entity {
    private transform: TransformComponent;

    init(): void {
        this.transform = this.getComponent(TransformComponent);
        this.transform.position = { x: this.game.appSettings.pixiSettings.width / 2, y: this.game.appSettings.pixiSettings.height / 2 };
        super.init();
    }

    tick(deltaTime: number): void {
        this.transform.rotation += 0.1 * deltaTime;
        super.tick(deltaTime);
    }
}
