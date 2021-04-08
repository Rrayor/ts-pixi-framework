import { SpriteRenderer } from '@framework/components/sprite-renderer';
import { TextureLoader } from '@framework/components/texture-loader';
import { TileMapComponent } from '@framework/components/tilemap';
import { TransformComponent } from '@framework/components/transform';
import { Entity } from '@framework/ecs/core/entity';

export class Tile extends Entity {
  private tileMap: TileMapComponent;
  private transform: TransformComponent;
  private spriteRenderer: SpriteRenderer;

  constructor() {
    super('tile');
  }

  preInit(): void {
    this.tileMap = new TileMapComponent(
      { name: 'tileset', path: 'src/example/assets/copyright_tileset.png' },
      { tileCountX: 12, tileCountY: 6, tileHeight: 16, tileWidth: 16 }
    );
    this.transform = new TransformComponent();
    this.tileMap.preInit();
    this.spriteRenderer = new SpriteRenderer(new TextureLoader(this.tileMap.getTile(1, 2)));

    this.addComponent(TileMapComponent, this.tileMap);
    this.addComponent(TransformComponent, this.transform);
    this.addComponent(SpriteRenderer, this.spriteRenderer);

    super.preInit();
  }

  tick(deltaTime: number): void {
    this.transform.rotation += 0.1 * deltaTime;
    super.tick(deltaTime);
  }
}
