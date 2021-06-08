export class Project {
    // TODO: serialize
    
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
}