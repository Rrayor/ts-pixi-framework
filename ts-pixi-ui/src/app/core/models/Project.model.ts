import { Serializable } from '@core/interfaces/Serializable.interface';
export class Project implements Serializable<Project> {
    private readonly _name: string;
    private readonly _path: string;

    public get name(): string {
        return this._name;
    }

    public get path(): string {
        return this._path;
    }

    constructor(name: string, path: string) {
        this._name = name;
        this._path = path;
    }

    serialize(): string {
        return JSON.stringify(this);
    }
}
