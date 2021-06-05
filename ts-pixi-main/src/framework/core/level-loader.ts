import { ILoaderResource, LoaderResource } from '@pixi/loaders';

import { TileMap } from '../utils/tilemap';

const fileExtension = 'level';
export class LevelLoaderPlugin {
    static add() {
        // level files loaded as JSON
        LoaderResource.setExtensionXhrType(fileExtension, LoaderResource.XHR_RESPONSE_TYPE.JSON);
    }
    static use(resource: ILoaderResource, next: (p?: any) => any) {
        if (resource.extension !== fileExtension) {
            return next();
        }
        const level = new TileMap(resource.data.width, resource.data.height, resource.data.tileSize, resource.data.layers, resource.data.tileConfig);
        resource.data = level;
        next();
    }
}
