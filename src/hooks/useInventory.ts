import { useNuiEvent, useNuiRequest } from "fivem-nui-react-lib";
import { useRecoilState, useSetRecoilState } from "recoil"
import { hoverState, inventoryState, keyState, mouseState } from "../state/inventory"
import { InvEvents } from "../../enums/Events";
import { Mouse } from "../../types/Mouse";
import { Storages } from "../../types/Storage";
import { EmptySelectedItem } from "../../enums/EmptyItem";

export const useInventory = () => {
    const { send } = useNuiRequest();
    const [inventory, setInventory] = useRecoilState(inventoryState.inventory);
    const [showInventory, setShowInventory] = useRecoilState(inventoryState.showInventory);
    const [serverIdentifier, setServerIdentifier] = useRecoilState(inventoryState.serverIdentifier);
    const [shiftKey, setShiftKey] = useRecoilState(keyState.shiftKey);
    const [controlKey, setControlKey] = useRecoilState(keyState.controlKey);
    const setSelectedItem = useSetRecoilState(inventoryState.selectedItem);
    const setMouse = useSetRecoilState<Mouse>(mouseState.mouse);
    const setClearHover = useSetRecoilState<any>(hoverState.hoverItem);
    const setAnchorItem = useSetRecoilState<any>(hoverState.anchorItem);

    const toggleShowInventory = () => {
        setShowInventory(!showInventory);
    }

    // const toggleShiftKey = () => {
    //     setShiftKey(!shiftKey);
    // }

    const handleMovePersonalItem = (personalInventory: Storage) => {
        console.log("Moving the item...");
        let copyInv = { ...inventory };
        copyInv.personal.slots = personalInventory.slots;

        setMouse((state) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: undefined, secondIndex: undefined }));
        setSelectedItem(EmptySelectedItem);
        setInventory((state) => ({
            ...state,
            personal: copyInv.personal,
        }));
    };

    const handleItemMove = (movedInventory: Storages) => {
        let copyInv = { ...inventory };
        copyInv.personal.slots = movedInventory.personal.slots;

        if (movedInventory.second && copyInv.second) {
            copyInv.second.slots = movedInventory.second.slots;
        }

        setMouse((state) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: undefined, secondIndex: undefined }));
        setSelectedItem(EmptySelectedItem);
        setInventory((state) => ({
            ...state,
            personal: copyInv.personal,
            second: copyInv.second,
        }));
    }

    const handleOpenInventory = (data: any) => {
        console.log(data);
        let invCopy = JSON.parse(JSON.stringify(inventory));
        invCopy.personal.slots = data.inventory.personal.slots;
        invCopy.personal.type = data.inventory.personal.type;
        invCopy.personal.weight = data.inventory.personal.weight;
        if (inventory.second && invCopy.second) {
            invCopy.second.slots = data.inventory.second.slots;
            invCopy.second.type = data.inventory.second.type;
            invCopy.second.weight = data.inventory.second.weight;
            invCopy.second.customName = data.inventory.second.customName;
        }
        setSelectedItem(EmptySelectedItem);
        setMouse((state) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: undefined, secondIndex: undefined }));
        setShowInventory(true);
        // if (autoclearWeightCount) {
        //     setCount('');
        // }
        setServerIdentifier(data.serverIdentifier);
        setInventory((state) => ({
            ...state,
            personal: invCopy.personal,
            second: invCopy.second,
        }));
    };

    const handleInventoryRefresh = (data: any) => {
        setSelectedItem(EmptySelectedItem);
        setMouse((state) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: undefined, secondIndex: undefined }));
        const personalInv = JSON.parse(JSON.stringify(data.personal));

        setInventory((state) => ({
            ...state,
            personal: personalInv,
        }));
    }

    const handleCloseInventory = () => {
        setClearHover(null);
        setShowInventory(false);
        // setSelectedItem(null);
        setAnchorItem(null);
        // setShowSettingPane(false);
        // setShowInfoPane(false);
        setMouse((state) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: undefined, secondIndex: undefined }));

        // send(InvEvents.CLOSE, { inventory: inventory, serverIdentifier: serverIdentifier });
    };

    const handleRefresh = (data: any) => {
        setSelectedItem(EmptySelectedItem);
        setMouse((state) => ({ ...state, mousePosition: { x: undefined, y: undefined }, firstIndex: undefined, secondIndex: undefined }));
        setInventory((state) => ({
            ...state,
            personal: data.personal,
            second: data.second,
        }));
    }


    useNuiEvent("snf-inv", InvEvents.OPEN, handleOpenInventory);
    useNuiEvent("snf-inv", InvEvents.CLOSE, handleCloseInventory);
    useNuiEvent("snf-inv", InvEvents.MOVE_ITEM_PERSONAL, handleMovePersonalItem);
    useNuiEvent("snf-inv", InvEvents.REFRESH_PLAYER_INVENTORY, handleInventoryRefresh);
    useNuiEvent("snf-inv", InvEvents.REFRESH_INVENTORIES, handleRefresh);

    return { inventory, showInventory, toggleShowInventory, shiftKey, setShiftKey, controlKey, setControlKey };
}