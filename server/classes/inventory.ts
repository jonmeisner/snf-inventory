import {
    InventoryType,
    InventoryInitProps,
    Slot,
    Item,
    CargoSlot,
} from "../../types/Inventory";
import { Cargo, CargoSize } from "../../types/Item";

/**
 * Primary Inventory class
 * @param identifier Unique string attached to this inventory (Server uniqueness)
 * @param type Type flag (GROUND_INVENTORY/PLAYER_INVENTORY/...)
 * @param entity Entity this inventory is attached to (Vehicle, Object, Player, etc.)
 * @param maxWeight Max physical weight of the inventory
 * @param maxSlots Max number of item slots
 * @param slots Slot data from source, could be empty
 * @param cargo Cargo data from source, could be empty
 *
 * All actions and operations are to be atomic and behave as though data has been
 * cleaned and verified. Setter and Getters should all be, more/less, one liners.
 */
export class Inventory {
    private identifier: string;
    private type: InventoryType;
    private entity: number;
    private weight: number;
    private maxWeight: number;
    private maxSlots: number;
    private slots: Slot[];
    private cargo?: CargoSlot[];

    constructor({
        identifier,
        type,
        entity,
        maxWeight,
        maxSlots,
        slots,
        cargo,
    }: InventoryInitProps) {
        this.identifier = identifier;
        this.type = type;
        this.entity = entity;
        this.maxWeight = maxWeight;
        this.maxSlots = maxSlots;
        this.slots = slots;
        this.weight = 0;
        this.cargo = cargo;
    }

    get GetIdentifier(): string {
        return this.identifier;
    }
    get GetMaxWeight(): number {
        return this.maxWeight;
    }
    get GetWeight(): number {
        return this.weight;
    }
    get GetEntity(): number {
        return this.entity;
    }
    get GetType(): InventoryType {
        return this.type;
    }
    get IsPlayer(): boolean {
        return this.type == InventoryType.PLAYER_INVENTORY;
    }
    get IsTrunk(): boolean {
        return this.type == InventoryType.TRUNK_INVENTORY;
    }
    get IsGround(): boolean {
        return this.type == InventoryType.GROUND_INVENTORY;
    }
    get IsContainer(): boolean {
        return this.type == InventoryType.CONTAINER_INVENTORY;
    }
    get IsPackage(): boolean {
        return this.type == InventoryType.PACKAGE_INVENTORY;
    }
    get GetMaxSlots(): number {
        return this.maxSlots;
    }
    get GetSlots(): Slot[] {
        return this.slots;
    }
    get GetFirstEmptySlot(): number {
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i].item === null) return i;
        }
        return -1;
    }
    get HasCargo(): boolean {
        return this.cargo!.length > 0 ? true : false;
    }
    get HasSmallCargoSlot(): boolean {
        for (let i = 0; i < this.cargo!.length; i++) {
            if (this.cargo![i].size === CargoSize.SMALL_CARGO) return true;
        }
        return false;
    }
    get HasMediumdCargoSlot(): boolean {
        for (let i = 0; i < this.cargo!.length; i++) {
            if (this.cargo![i].size === CargoSize.MEDIUM_CARGO) return true;
        }
        return false;
    }
    get HasLargeCargoSlot(): boolean {
        for (let i = 0; i < this.cargo!.length; i++) {
            if (this.cargo![i].size === CargoSize.LARGE_CARGO) return true;
        }
        return false;
    }
    get HasOpenSmallCargoSlot(): boolean {
        for (let i = 0; i < this.cargo!.length; i++) {
            if (this.cargo![i].size === CargoSize.SMALL_CARGO && this.cargo![i].cargo === null) return true;
        }
        return false;
    }
    get HasMediumSmallCargoSlot(): boolean {
        for (let i = 0; i < this.cargo!.length; i++) {
            if (this.cargo![i].size === CargoSize.MEDIUM_CARGO && this.cargo![i].cargo === null) return true;
        }
        return false;
    }
    get HasOpenLargeCargoSlot(): boolean {
        for (let i = 0; i < this.cargo!.length; i++) {
            if (this.cargo![i].size === CargoSize.LARGE_CARGO && this.cargo![i].cargo === null) return true;
        }
        return false;
    }
    // get HasCargo(): boolean { return this.cargo.length > 0 }
    // get HasSmallCargo(): boolean {
    //     this.cargo.forEach((cargo: Cargo, index: number) => { if (cargo.size === CargoSize.SMALL_CARGO) return true; })
    //     return false;
    // }
    // get HasMediumCargo(): boolean {
    //     this.cargo.forEach((cargo: Cargo, index: number) => { if (cargo.size === CargoSize.MEDIUM_CARGO) return true; })
    //     return false;
    // }
    // get HasLargeCargo(): boolean {
    //     this.cargo.forEach((cargo: Cargo, index: number) => { if (cargo.size === CargoSize.LARGE_CARGO) return true; })
    //     return false;
    // }

    set SetEntity(newEntity: number) {
        this.entity = newEntity;
    }
    set SetMaxSlots(newMaxSlots: number) {
        this.entity = newMaxSlots;
    }
    set SetSlots(newSlots: Slot[]) {
        this.slots = newSlots;
    }

    getSlotByIndex(index: number): Slot {
        return this.slots[index];
    }

    getFirstSlotWithItem(name: string, start?: number): Slot | null {
        for (let i = !start ? 0 : start; i < this.slots.length; i++) {
            if (this.slots[i]?.item?.name === name) return this.slots[i];
        }
        return null;
    }

    /**
     * Checks if the given item and stack size will fit within this inventory
     * @param item Item we want to fit into the inventory
     * @param count The size of the stack being placed in the inventory
     * @param index (OPTIONAL): Place to begin searching for open space. This will only be defined if there is no empty slots
     */
    canHoldItem(item: Item, count: number, index?: number): boolean {
        if (index === undefined) { // Non Recursive Call
            let existingItem: Slot | null = this.getFirstSlotWithItem(item.name, index ? index : undefined);
            // This is not in the inventory, search for an empty space
            if (existingItem === null) {
                // Check for an empty slot and for new weight
                if (this.GetFirstEmptySlot > -1) {
                    if (this.weight + (item.weight * count) <= this.maxWeight) {
                        return true;
                    } else {
                        console.warn("Will go overweight");
                        return false;
                    }
                } else {
                    console.warn("Not enough space")
                    return false;
                }
            } else {
                //  Item already exists, check if we can add to the stack or if we add to a new slot

                return true;
            }
        } else { // This was called recursively
            console.warn("Calling Recursive");
            return false;
            // let
        }
    }

    // canHoldItem(item: Item, count: number, index?: number): boolean {
    //     // Check if this item is already in the inventory
    //     let existingItem: Slot | null = this.getFirstSlotWithItem(item.name, index ? index : undefined);
    //     if (existingItem === null) {
    //         // Check for an empty slot and for new weight
    //         if (this.GetFirstEmptySlot > -1) {
    //             if ()
    //             if (this.weight + item.weight <= this.maxWeight) {
    //                 return true;
    //             } else return false;
    //         } else {
    //             console.warn("Not enough space")
    //             return false;
    //         }
    //     } else {
    //         // If so, check if the stack will overflow or not
    //         if (this.weight + item.weight * count > this.maxWeight) {
    //             return false;
    //             // If overflows, look for either another instance of this item or an empty slot
    //             // return this.canHoldItem(item, this.weight + (item.weight * count) - this.maxWeight);
    //         } else return true;
    //     }
    //     // If so, resursively call
    // }

    syncWeight(): void {
        let newWeight = 0;
        this.slots.forEach((slot: Slot, index: number) => {
            if (slot && slot.item) newWeight += slot.count * slot.item.weight;
        });
        this.weight = newWeight;
    }
}

