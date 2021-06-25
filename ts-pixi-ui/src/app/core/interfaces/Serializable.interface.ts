export interface Serializable<T> {
    serialize(): string;
    deserialize(json: string): T;
}
