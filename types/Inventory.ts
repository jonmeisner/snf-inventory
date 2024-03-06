// import { InventoryWrapper } from "../server/classes/inventory-wrapper";
// import { ItemSlots } from "./Item";

// export type QueryTransaction = { query: string, values: {} | null };
// export type CreateHandler = (wrapper: InventoryWrapper, source: number, ...args: any[]) => void;
// export type SaveHandler = (uniqueId: string | number, sltos: ItemSlots) => void;

import {
  BaseItem,
  Food,
  Tool,
  Equipment,
  Cargo,
  CargoSize,
} from "../types/Item";

export enum InventoryType {
  CONTAINER_INVENTORY = "container_inventory",
  GROUND_INVENTORY = "ground_inventory",
  PACKAGE_INVENTORY = "package_inventory",
  PERSONAL_INVENTORY = "personal_inventory",
  PLAYER_INVENTORY = "player_inventory",
  TRUNK_INVENTORY = "trunk_inventory",
}

export type Item = (BaseItem | Food | Tool | Equipment | Cargo);

export interface Slot {
  count: number;
  item: Item | null;
}

export interface CargoSlot {
  size: CargoSize;
  cargo: Cargo | null;
}

export interface InventoryInitProps {
  identifier: string;
  type: InventoryType;
  entity: number;
  maxWeight: number;
  maxSlots: number;
  slots: Slot[];
  cargo?: CargoSlot[];
}

export enum MouseType {
  LEFT = 0,
  MIDDLE = 1,
  RIGHT = 2,
}

export interface SelectedItem {
  slot: Slot;
  mouseType: MouseType;
  from: string;
  to: string;
}
