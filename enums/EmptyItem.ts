import { MouseType, SelectedItem, Slot } from "../types/Inventory";
// import { ItemTypes } from "./ItemTypes";

// export const EmptyItem: Item = {
//     name: "",
//     type: ItemTypes.NORMAL,
//     label: "",
//     weight: -1,
//     quantity: -1,
//     rarity: -1,
//     limit: -1,
//     durability: -1,
//     maxDurability: -1,
//     description: "",
// };

export const EmptySlot: Slot = {
    count: 0,
    item: null
}

export const EmptySelectedItem: SelectedItem = {
    slot: EmptySlot,
    mouseType: MouseType.LEFT,
    from: "",
    to: ""
}