import { ScriptComponent } from '@framework/components/script';
import { TransformComponent } from '../../framework/components/transform';

export class RotateScript extends ScriptComponent {
    private transform: TransformComponent;

    init(): void {
        this.transform = this.entity.getComponent(TransformComponent);
    }

    tick(deltaTime: number): void {
        this.transform.rotation += 0.1 * deltaTime;
    }
}
