import { atom } from "recoil";

export const UIState = {
    showPersonal: atom<boolean>({
        key: 'showPersonal',
        default: false,
    }),
    inventoryScale: atom<number>({
        key: 'inventoryScale',
        default: 1.3,
    }),
    toolTipScale: atom<number>({
        key: 'toolTipScale',
        default: 1.0,
    }),
    showSettings: atom<boolean>({
        key: 'showSettings',
        default: false
    }),
    showTooltip: atom<boolean>({
        key: 'showTooltip',
        default: false
    }),
    showSplitter: atom<boolean>({
        key: 'showSplitter',
        default: false
    })
};