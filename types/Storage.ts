import { Slot } from "./Inventory";
// import { Item } from "./Item";

export interface Weight {
    current: number;
    max: number;
}

export interface Storage {
    type: string;
    slots: Slot[];
    weight: Weight;
    location?: number[];
    customName?: string;
    private?: boolean,
    access?: string[]
}

export interface Storages {
    personal: Storage;
    second: Storage;
    tertiary: Storage;
    equipment: EquipmentStorage;
    serverIdentifier?: string;
}

export interface EquipmentStorage {
    slots: Slot[];
    skills: Skill[];
}

export interface Skill {
    name: string;
    value: number;
}