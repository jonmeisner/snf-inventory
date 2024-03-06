export enum CargoSize {
    SMALL_CARGO = 1,
    MEDIUM_CARGO = 3,
    LARGE_CARGO = 5
}

export interface BaseItem {
    name: string,
    label: string,
    description: string,
    weight: number,
    rarity: number,
    stackLimit: number,
    durability?: number,
    rank?: number
}

/**
 * Item that is consumable by the player for stats (Hunger/Thirst/...)
 */
export interface Food extends BaseItem {
    decay: number,
}

/**
 * Item with some kind of use (Lockpick/Crowbar/...)
 */
export interface Tool extends BaseItem {
    decay: number, // Passive durability loss
    cost: number, // How much durability drops on use
    rank: number
}

/**
 * Item that can be equiped by the player for stats (Pickaxe/Axe/Jewelry/...)
 * 
 * Example Stats: Gather Rate/Gather Amount/Etc.
 */
export interface Equipment extends BaseItem { // Clothing/Equipables
    decay: number,
    cost: number,
    rank: number
}

export interface Appliance extends BaseItem {
    rank: number

}

export interface Cargo extends BaseItem {
    capacity: number,
    item: string,
    size: CargoSize
}

export interface Container extends BaseItem {
    numSlots: number,
}

// import { ItemSlotTypes, ItemTypes } from "../enums/ItemTypes";

// export interface Weight {
//   current: number;
//   max: number;
// }

// export enum MouseType {
//   LEFT = 0,
//   MIDDLE = 1,
//   RIGHT = 2,
// }

// export interface SelectedItem {
//   item: Item;
//   mouseType: MouseType;
//   from: string;
//   to: string;
// }

// export interface Perks {
//   name: string;
//   effect: string;
//   effectValue: number;
//   effectType: string;
// }

// export type ItemSlots = (Item | null)[];

// export interface Item {
//   name: string;
//   type: ItemTypes;
//   label: string;
//   description: string;
//   weight: number;
//   quantity: number;
//   rarity: number; // For visual flair in the inventory and tracking
//   limit: number; // Max stack size
//   decay?: number; // Amount divided by 100 to be removed from the item per tick
//   durability?: number; // Food/Weapons/Parts/etc.
//   maxDurability?: number; // Max item durability
//   rank?: number; // Mainly for vehicle parts (1* means level 1 upgrade, 2* level 2, etc.)
//   requirement?: string; // Only for industry and car parts
//   value?: number; // Market value meta data that only populates when the market is online

//   // Added 9/16/2023 for ideas around equipment
//   slotType?: ItemSlotTypes | null;
//   businessType?: string;
//   // vendorValue?: number;
//   // marketValue?: number;
//   stats?: IStat[];
//   primaryStat?: IPrimaryStat;
//   equipBonus?: IEquipBonus;
//   set?: ISet | null;
// }

// export type IEquipBonus = {
//   bonusName: string;
// };

// export type IStat = {
//   numeric: number;
//   statName: string;
// };

// export type IPrimaryStat = {
//   name: string;
//   value: number;
//   prefix: string;
// };

// export type ISet = {
//   name: string;
//   numItems: number;
//   setItems: ISetItem[];
//   setBonuses: ISetBonus[];
// };

// export type ISetItem = {
//   name: string;
//   rarity: number;
// };

// export type ISetBonus = {
//   setCount: number;
//   setBonus: string;
// };
