import { TransformComponent } from '@framework/components';
import { ScriptComponent } from '@framework/components/script';

export class CenterScript extends ScriptComponent {
    private transform: TransformComponent;

    init(): void {
        this.transform = this.entity.getComponent(TransformComponent);
        this.transform.position = { x: this.entity.game.appSettings.pixiSettings.width / 2, y: this.entity.game.appSettings.pixiSettings.height / 2 };
    }
}
