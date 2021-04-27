import { IAppOptions } from './app-options';
import { PixiSettings } from './pixi-settings';

export class AppSettings implements IAppOptions {
    constructor(public pixiSettings = new PixiSettings()) {}
}
