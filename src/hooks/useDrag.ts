import { useNuiRequest } from "fivem-nui-react-lib";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import { Item } from "../../types/Item";
import { Item, Slot } from "../../types/Inventory";
import { Mouse } from "../../types/Mouse";
import { mouseState, inventoryState, hoverState, countState, keyState } from "../state/inventory";
import { InvEvents } from "../../enums/Events";
import { EmptySlot, EmptySelectedItem } from "../../enums/EmptyItem";
import { UIState } from "../state/ui";

const useDrag = () => {
    const { send } = useNuiRequest();
    const [mouse, setMouse] = useRecoilState<Mouse>(mouseState.mouse);
    const [selectedItem, setSelectedItem] = useRecoilState(inventoryState.selectedItem);
    const setShowSplitter = useSetRecoilState(UIState.showSplitter);
    // const setSplitAnchor = useSetRecoilState();
    const shiftKey = useRecoilValue(keyState.shiftKey);
    const controlKey = useRecoilValue(keyState.controlKey);
    const setHoverItem = useSetRecoilState(hoverState.hoverItem);
    const inventory = useRecoilValue(inventoryState.inventory);
    const serverIdentifier = useRecoilValue(inventoryState.serverIdentifier);
    // const count = useRecoilValue(countState.count);
    // const approvedStoreList = useRecoilValue(shopState.shopNames);

    const mouseDownHandler = (e: React.MouseEvent<HTMLElement>, slot: Slot, index: number, type: string, canUse = true) => {
        if (e.nativeEvent.button === 0) { // Left Mouse
            if (slot && slot.item) {
                if (controlKey && !shiftKey) {
                    // Move this item to the first available spot in the other inventory.
                    // If there is a stack of this item that is not full, fill it, and try again with the leftovers
                    if (type === "personal" && inventory.second.type !== "nothing") {
                        // Place this item in the inventory
                    }
                } else if (!controlKey && shiftKey) {
                    // Open the Split Window

                } else {
                    setHoverItem(EmptySlot);
                    setMouse((state: any) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: index, secondIndex: undefined }));
                    setSelectedItem((state) => ({
                        ...state,
                        from: type,
                        mouseType: e.nativeEvent.button,
                        to: '',
                        slot: slot
                    }))
                }
            }
        } else if (e.nativeEvent.button === 1) { // Middle Mouse
            if (slot && slot.item) {
                setHoverItem(EmptySlot);
                setMouse((state: any) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: index, secondIndex: undefined }));
                setSelectedItem((state) => ({
                    ...state,
                    from: type,
                    mouseType: e.nativeEvent.button,
                    to: '',
                    slot: slot
                }))
            }
        } else if (e.nativeEvent.button === 2) { // Right Mouse
            // send(InvEvents.USE_ITEM, {

            // })
        }
    }

    const mouseUpHandler = (e: React.KeyboardEvent | React.MouseEvent<HTMLElement>, index: number, type: string) => {
        if (mouse.firstIndex !== index) {
            if (selectedItem && mouse.secondIndex === undefined) {
                if (selectedItem.mouseType === 0) {

                    let copySelectedItem = { ...selectedItem };
                    copySelectedItem.to = type;
                    console.log("Moving item: " + selectedItem.slot.item?.name + " [" + mouse.firstIndex + "] => [" + index + "]");
                    // if (approvedStores(selectedItem.from, approvedStoreList) && (selectedItem.from !== type || e.shiftKey)) {
                    //     send(Shops.BUY_ITEM, {
                    //         selectedItem: selectedItem,
                    //         store: selectedItem.from,
                    //         slotId: index,
                    //         shiftKey: e.shiftKey,
                    //         count: count,
                    //     });
                    // } else {
                    // send(InvEvents.MOVE_ITEM, {
                    //     serverIdentifier: serverIdentifier,
                    //     firstIndex: mouse.firstIndex,
                    //     secondIndex: index,
                    //     selectedItem: copySelectedItem,
                    //     droppedItem: inventory.personal.slots[index],
                    //     type: inventory.second.type,
                    //     count: count
                    // });
                } else if (selectedItem.mouseType === 1) {
                    let copySelectedItem = { ...selectedItem };
                    copySelectedItem.to = type;
                    console.log("Splitting item: " + selectedItem.slot.item?.name + " [" + mouse.firstIndex + "] => [" + index + "]");

                    // send(InvEvents.SPLIT_ITEM, {
                    //     serverIdentifier: serverIdentifier,
                    //     firstIndex: mouse.firstIndex,
                    //     secondIndex: index,
                    //     selectedItem: copySelectedItem,
                    //     droppedItem: inventory.personal.slots[Number(selectedItem.to)],
                    //     type: inventory.second.type,
                    // })
                }
                // }
                setSelectedItem(EmptySelectedItem);
                setMouse((state: any) => ({ ...state, mousePosition: { x: undefined, y: undefined }, secondIndex: undefined }));
            }
        } else {
            setSelectedItem(EmptySelectedItem);
            setMouse((state: any) => ({ ...state, mousePosition: { x: undefined, y: undefined }, secondIndex: undefined }));
        }
    };

    const useItemHandler = (e: React.KeyboardEvent | React.MouseEvent<HTMLElement>) => {
        if (selectedItem) {
            let copySelectedItem = { ...selectedItem };
            console.log("Using item...", serverIdentifier, copySelectedItem, mouse.firstIndex, copySelectedItem.from);
            // send(InvEvents.USE_ITEM, {
            //     serverIdentifier: serverIdentifier,
            //     selectedItem: copySelectedItem,
            //     firstIndex: mouse.firstIndex,
            //     type: copySelectedItem.from,
            // });
            setSelectedItem(EmptySelectedItem);
            setMouse((state: any) => ({ ...state, mousePosition: { x: undefined, y: undefined }, secondIndex: undefined }));
        }
    }

    return { mouse, mouseDownHandler, mouseUpHandler, useItemHandler }
}

export default useDrag;