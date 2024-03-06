import { Container } from "../../types/Item";
import { Slot } from "../../types/Inventory";
import { Inventory } from "../../server/classes/inventory";
import { InventoryType } from "../../types/Inventory";
import { EmptySlot } from "../../enums/EmptyItem";

export function buildPersonalInventory(): Inventory {
    const inventory: Inventory = new Inventory({
        identifier: "personal",
        type: InventoryType.PERSONAL_INVENTORY,
        entity: 0,
        maxWeight: 50,
        maxSlots: 18,
        slots: mockInventory,
        cargo: Array(6).fill({}),
    });
    return inventory;
}

export function buildGroundInventory(): Inventory {
    const inventory: Inventory = new Inventory({
        identifier: "ground",
        type: InventoryType.GROUND_INVENTORY,
        entity: 0,
        maxWeight: 200,
        maxSlots: 18,
        slots: mockGround,
    });
    return inventory;
}

export function buildContainerInventory(): Inventory {
    const inventory: Inventory = new Inventory({
        identifier: "ground",
        type: InventoryType.CONTAINER_INVENTORY,
        entity: 0,
        maxWeight: 1000,
        maxSlots: 72,
        slots: Array(72).fill(EmptySlot),
    });
    return inventory;
}

export const mockInventory: Slot[] = [
    {
        count: 5,
        item: {
            name: "alpaca_wool",
            label: "Alpaca Wool",
            description: "Rare wool from an alpaca",
            weight: 1,
            rarity: 2,
            stackLimit: 20,
            durability: 100,
        }
    },
    {
        count: 1,
        item: {
            name: "potatoes",
            label: "Potatoes",
            description: "Man I dislike potatoes",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: -1
        }
    },
    {
        count: 1,
        item: {
            name: "beer",
            label: "Beer",
            description: "Still bubbling",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: 17,
        }
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 1,
        item: {
            name: "potatoes",
            label: "Potatoes",
            description: "Man I dislike potatoes",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: -1
        }
    },
    {
        count: 1,
        item: {
            name: "potatoes",
            label: "Potatoes",
            description: "Man I dislike potatoes",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: -1
        }
    },
    {
        count: 1,
        item: {
            name: "potatoes",
            label: "Potatoes",
            description: "Man I dislike potatoes",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: -1
        }
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 1,
        item: {
            name: "chest",
            label: "Chest",
            description: "Holds your things",
            weight: 5,
            rarity: 3,
            stackLimit: 1,
            numSlots: 9,
            rank: 5,
            durability: 40
        } as Container
    },
]

export const mockGround: Slot[] = [
    {
        count: 1,
        item: {
            name: "potatoes",
            label: "Potatoes",
            description: "Man I dislike potatoes",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: -1
        }
    },
    {
        count: 1,
        item: {
            name: "potatoes",
            label: "Potatoes",
            description: "Man I dislike potatoes",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: -1
        }
    },
    {
        count: 1,
        item: {
            name: "potatoes",
            label: "Potatoes",
            description: "Man I dislike potatoes",
            weight: 1,
            rarity: 0,
            stackLimit: 1,
            durability: -1
        }
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
    {
        count: 0,
        item: null
    },
]