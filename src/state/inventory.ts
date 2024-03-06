import { atom } from 'recoil';
import { Mouse } from "../../types/Mouse";
import { mockGround, mockInventory } from '../mocks/mockInventory';
import { Storages } from '../../types/Storage';
import { EmptySelectedItem, EmptySlot } from '../../enums/EmptyItem';
import { SelectedItem, Slot } from '../../types/Inventory';


export const inventoryState = {
    showInventory: atom<boolean>({
        key: 'showInventory',
        default: false,
    }),
    inventory: atom<Storages>({
        key: 'inventory',
        default: {
            // Always player storage
            personal: {
                type: 'personal',
                slots: mockInventory,
                weight: {
                    current: 20.5,
                    max: 50
                }
            },
            // Storage/Personal Inventory Being Accessed
            second: {
                type: 'storage',
                slots: Array(72).fill(EmptySlot),
                weight: {
                    current: 0,
                    max: 1000
                },
                private: false,
                access: [],
            },
            // ground unless in a vehicle
            tertiary: {
                type: 'ground',
                slots: mockGround,
                weight: {
                    current: 0,
                    max: 300
                },
            },
            equipment: {
                slots: [],
                skills: [
                    {
                        name: "Electronics",
                        value: 0,
                    },
                    {
                        name: "Chemistry",
                        value: 0,
                    },
                    {
                        name: "Hacking",
                        value: 0,
                    },
                    {
                        name: "Armorer",
                        value: 0,
                    },
                    {
                        name: "Mechanics",
                        value: 0,
                    },
                    {
                        name: "Weapon Smithing",
                        value: 0,
                    },
                ],
            }
        }
    }),
    selectedItem: atom<SelectedItem>({
        key: 'selectedItem',
        default: EmptySelectedItem,
    }),
    serverIdentifier: atom({
        key: 'serverIdentifier',
        default: null
    })
}

export const hoverState = {
    hoverItem: atom<Slot>({
        key: 'hoverItem',
        default: EmptySlot
    }),
    anchorItem: atom<any>({
        key: 'anchorItem',
        default: null
    }),
};

export const mouseState = {
    mouse: atom<Mouse>({
        key: 'mouse',
        default: {
            mousePosition: {
                x: undefined,
                y: undefined
            },
            firstIndex: undefined,
            secondIndex: undefined
        }
    })
};

export const countState = {
    count: atom<number | string>({
        key: 'count',
        default: ''
    })
};

export const keyState = {
    shiftKey: atom<boolean>({
        key: 'shiftKey',
        default: false
    }),
    controlKey: atom<boolean>({
        key: 'controlKey',
        default: false
    })
}

export const splitState = {
    splitItem: atom<Slot>({
        key: 'splitItem',
        default: EmptySlot,
    }),
    splitAnchor: atom<any>({
        key: 'splitAnchor',
        default: null
    }),
}