import { IComponent } from '@electron-app/framework/ecs/core/component';
import { IDestroy, IInit, IPostInit, IPreDestroy, IPreInit, ITicking } from '@electron-app/framework/ecs/shared';
import { Game } from '@electron-app/framework/game/game';

// tslint:disable-next-line: callable-types
type constr<T> = { new (...args: any[]): T };

export abstract class Entity implements IPreInit, IInit, IPostInit, ITicking, IPreDestroy, IDestroy {
    private _components: IComponent[] = [];
    private _game!: Game;

    public get game(): Game {
        return this._game;
    }

    public set game(game: Game) {
        this._game = game;
    }

    constructor(public readonly id: string) {}

    preInit(): void {
        this.preInitComponents();
    }
    init(): void {
        this.initComponents();
    }
    postInit(): void {
        this.postInitComponents();
    }
    tick(deltaTime: number): void {
        this.tickComponents(deltaTime);
    }
    preDestroy(): void {
        this.preDestroyComponents();
    }
    destroy(): void {
        this.destroyComponents();
    }

    private preInitComponents(): void {
        for (const component of this._components) {
            component.preInit();
        }
    }

    private initComponents(): void {
        for (const component of this._components) {
            component.init();
        }
    }

    private postInitComponents(): void {
        for (const component of this._components) {
            component.postInit();
        }
    }

    private tickComponents(deltaTime: number): void {
        for (const component of this._components) {
            component.tick(deltaTime);
        }
    }

    private preDestroyComponents(): void {
        for (const component of this._components) {
            component.preDestroy();
        }
    }

    private destroyComponents(): void {
        for (const component of this._components) {
            component.destroy();
        }
    }

    public addComponent<C extends IComponent>(cnstr: constr<C>, component: IComponent): void {
        if (this.hasComponent(cnstr)) {
            throw new Error(`${this.id} already has a ${cnstr.name} type component. Can't add another one`);
        }

        this._components.push(component);
        component.entity = this;
    }
    public hasComponent<C extends IComponent>(cnstr: constr<C>): boolean {
        return this._components.some((c: IComponent) => c instanceof cnstr);
    }

    public getComponent<C extends IComponent>(cnstr: constr<C>): C {
        const component = this._components.find((c) => c instanceof cnstr);
        if (!component) {
            throw new Error(`Component ${cnstr.name} not found on Entity ${this.constructor.name}`);
        }

        return component as C;
    }

    public removeComponent<C extends IComponent>(cnstr: constr<C>): void {
        const { toRemove, index } = this.findComponentToRemove(cnstr);

        if (toRemove && index) {
            toRemove.destroy();
            toRemove.entity = null;
            this._components.splice(index, 1);
        }
    }

    private findComponentToRemove<C extends IComponent>(cnstr: constr<C>): { toRemove: IComponent | null; index: number | null } {
        let toRemove: IComponent | null = null;
        let index: number | null = null;

        for (let i = 0; i < this._components.length; i++) {
            const component = this._components[i];
            if (component instanceof cnstr) {
                toRemove = component;
                index = i;
                break;
            }
        }

        return { toRemove, index };
    }
}
