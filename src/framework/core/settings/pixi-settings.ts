import { IPixiOptions } from './pixi-options';

export class PixiSettings implements IPixiOptions {
  
  constructor(public width = 800, public height = 600) {}
}