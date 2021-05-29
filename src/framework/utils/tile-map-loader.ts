import { AssetLoader } from '@framework/components/asset-loader';
import { Entity } from '@framework/ecs';

import { IComponent } from '../ecs/core/component';

export class TileMapLoader implements IComponent {
  entity: Entity;

  // TODO: Level type
  private data: unknown;
  private readonly assetLoader: AssetLoader;

  constructor(assetLoader: AssetLoader) {
    this.assetLoader = assetLoader;
  }

  preInit(): void { }

  init(): void {
    this.data = this.assetLoader.parseJSON();
  }

  postInit(): void {}
  tick(deltaTime: number): void {}
  preDestroy(): void {}
  destroy(): void {}


}