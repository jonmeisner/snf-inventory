import { Slot } from "../../../types/Inventory";
import { Storage } from "../../../types/Storage";
import ItemSlot from "../ItemSlot/ItemSlot";
import Header from "../Header/Header";
import "./Ground.css";
import { hoverState, inventoryState, mouseState } from "../../state/inventory";
import { useRecoilValue, useSetRecoilState } from "recoil";

type groundProps = {
    handlePopoverClose: () => void;
    inventory: Storage;

}

const Ground = ({ inventory, handlePopoverClose }: groundProps) => {

    const setAnchorItem = useSetRecoilState(hoverState.anchorItem);
    const setHoveredItem = useSetRecoilState(hoverState.hoverItem);

    const handlePopoverOpen = async (event: React.MouseEvent<HTMLElement>, index: number) => {
        setAnchorItem(event.currentTarget);
        setHoveredItem(inventory.slots[index]);
    };

    return (
        <div className="ground-wrapper">
            <Header weight={inventory.weight} inventoryType={inventory.type} />
            <div className="ground-grid-wrapper">
                <div className="ground-hotbar"></div>
                <div className="ground-grid">
                    {inventory.slots.map((slot: Slot, index: number) => {
                        return <ItemSlot invenType="ground" handlePopoverOpen={handlePopoverOpen} handlePopoverClose={handlePopoverClose} key={index} slotIndex={index} slot={slot} hotBar={false} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Ground;