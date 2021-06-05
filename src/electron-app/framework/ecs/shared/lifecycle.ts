export interface IPreInit {
    preInit(): void;
}

export interface IInit {
    init(): void;
}

export interface IPostInit {
    postInit(): void;
}
export interface ITicking {
    tick(deltaTime: number): void;
}

export interface IPreDestroy {
    preDestroy(): void;
}

export interface IDestroy {
    destroy(): void;
}
